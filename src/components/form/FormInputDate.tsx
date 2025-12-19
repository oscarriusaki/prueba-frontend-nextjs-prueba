import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  PathValue,
} from 'react-hook-form'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import {
  FormHelperText,
  IconButton,
  InputLabel,
  TextField,
  Typography,
  TypographyVariant,
} from '@mui/material'
import { RegisterOptions } from 'react-hook-form/dist/types/validator'
import esMX from 'dayjs/locale/es-mx'
import { validarFechaFormato } from '@/utils/fechas'
import dayjs, { Dayjs } from 'dayjs'
import { Icono } from '../Icono'

type FormDatePickerProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  id: string
  name: TName
  control: Control<TFieldValues>
  label: string
  size?: 'small' | 'medium'
  format?: string
  disabled?: boolean
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
  bgcolor?: string
  minDate?: Dayjs
  maxDate?: Dayjs
  labelVariant?: TypographyVariant
  desktopModeMediaQuery?: string
  clearable?: boolean
}

export const FormInputDate = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  id,
  name,
  control,
  label,
  size = 'small',
  format = 'DD/MM/YYYY',
  disabled,
  rules,
  bgcolor,
  minDate,
  maxDate,
  labelVariant = 'subtitle2',
  desktopModeMediaQuery = '',
  clearable,
}: FormDatePickerProps<TFieldValues, TName>) => {
  return (
    <div>
      <InputLabel htmlFor={id}>
        <Typography
          variant={labelVariant}
          sx={{
            color: 'text.primary',
            fontWeight: '500',
          }}
        >
          {label}
        </Typography>
      </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale={'es-mx'}
          >
            <DatePicker
              value={field.value ? dayjs(field.value) : null}
              onChange={(newValue: Dayjs | null) => {
                if (newValue) {
                  const valorConhora = newValue
                    ?.hour(dayjs().hour())
                    .minute(dayjs().minute())
                    .second(dayjs().second())
                  if (valorConhora.isValid()) {
                    field.onChange(valorConhora?.toISOString())
                  } else {
                    field.onChange(null)
                  }
                } else {
                  field.onChange(null)
                }
              }}
              minDate={minDate ? dayjs(minDate) : undefined}
              maxDate={maxDate ? dayjs(maxDate) : undefined}
              disabled={disabled}
              slotProps={{
                textField: {
                  id,
                  name,
                  size,
                  sx: { width: '100%', bgcolor },
                  error: !!error,
                  helperText: error?.message,
                  InputProps: {
                    endAdornment:
                      field.value && clearable ? (
                        <IconButton
                          sx={{ marginRight: '-12px' }}
                          color="primary"
                          onClick={() => field.onChange(null)}
                        >
                          <Icono color="primary">clear</Icono>
                        </IconButton>
                      ) : undefined,
                  },
                },
              }}
              format={format}
            />
          </LocalizationProvider>
        )}
        rules={{
          ...{
            validate: (val?: string) => {
              if (val && !validarFechaFormato(val, format)) {
                return 'La fecha no es válida'
              }
            },
          },
          ...rules,
        }}
        defaultValue={'' as PathValue<TFieldValues, TName>}
      />
    </div>
  )
}
