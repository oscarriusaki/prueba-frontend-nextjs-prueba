import { Checkbox, FormControlLabel, FormHelperText } from '@mui/material'
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form'

type FormInputCheckProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  id: string
  name: TName
  control: Control<TFieldValues>
  label: string
  disabled: boolean
  rules?: Omit<
    RegisterOptions<TFieldValues, TName>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >
}

export const FormInputCheckbox = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  id,
  name,
  control,
  label,
  disabled,
  rules,
  // }: FormInputCheckProps<FieldValues, TName>) => {
}: FormInputCheckProps<TFieldValues, TName>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormControlLabel
            control={
              <Checkbox
                id={id}
                checked={!!field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                disabled={disabled}
              />
            }
            label={label}
          />
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </>
      )}
      rules={rules}
    />
  )
}
