import { Grid, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormInputText } from '../form/FormInputText'
import {
  CrearEditarUniversitarioCRUDType,
  UniversitarioCRUDType,
} from '@/app/admin/(principal)/datos_academicos/types/universitariosCRUDType'
import { forwardRef, useImperativeHandle } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { setDataAcademico } from '@/store/academicoSlice'
import { FormInputDate } from '../form/FormInputDate'
import { FormInputAutocomplete } from '../form/FormInputAutoComplete'
import { UniversidadCRUDType } from '@/app/admin/(residencia)/universidades/types/universidadesCRUDType'

export interface DatosUniversitarioType {
  datosUniversitario?: UniversitarioCRUDType | null
  universidades: UniversidadCRUDType[]
  loading: boolean
}

export interface DatosUniversitarioHandle {
  guardarDatosDePaso: () => void
}

const DatosUniversitario = forwardRef<
  DatosUniversitarioHandle,
  DatosUniversitarioType
>(({ datosUniversitario, universidades, loading }, ref) => {
  const universitarioData = useSelector((state: RootState) => state.academico)
  const dispatch = useDispatch()
  useImperativeHandle(ref, () => ({
    guardarDatosDePaso,
  }))
  const { control, getValues } = useForm<CrearEditarUniversitarioCRUDType>({
    defaultValues: {
      id: datosUniversitario?.id ?? universitarioData?.universitario?.id,
      universidadBoliviana:
        datosUniversitario?.universidadBoliviana ??
        universitarioData?.universitario?.universidadBoliviana ??
        undefined,
      universidad: datosUniversitario?.universidad
        ? {
            key: datosUniversitario?.universidad?.id,
            label: datosUniversitario?.universidad?.nombre,
            value: datosUniversitario?.universidad?.id,
          }
        : universitarioData?.universitario?.universidad && undefined,
      tipo: datosUniversitario?.tipo ?? universitarioData?.universitario?.tipo,
      fechaIngreso:
        datosUniversitario?.fechaIngreso ??
        universitarioData?.universitario?.fechaIngreso,
      fechaEgreso:
        datosUniversitario?.fechaEgreso ??
        universitarioData?.universitario?.fechaEgreso,
      titulo:
        datosUniversitario?.titulo ?? universitarioData?.universitario?.titulo,
      fechaTitulo:
        datosUniversitario?.fechaTitulo ??
        universitarioData?.universitario?.fechaTitulo,
      notaPromocionFinal:
        datosUniversitario?.notaPromocionFinal ??
        universitarioData?.universitario?.notaPromocionFinal,
      tituloProvicionNro:
        datosUniversitario?.tituloProvicionNro ??
        universitarioData?.universitario?.tituloProvicionNro,
      promedioInternado:
        datosUniversitario?.promedioInternado ??
        universitarioData?.universitario?.promedioInternado,
      fecha:
        datosUniversitario?.fecha ?? universitarioData?.universitario?.fecha,
    },
  })

  const guardarDatosDePaso = () => {
    const datosGuardar: UniversitarioCRUDType = {
      ...(getValues('id')?.length === 0
        ? {}
        : {
            id: getValues('id'),
          }),
      ...(getValues('universidadBoliviana')?.length === 0
        ? {}
        : {
            universidadBoliviana: getValues('universidadBoliviana'),
          }),
      ...(getValues('universidad')?.value?.length === 0
        ? {}
        : {
            idUniversidad: getValues('universidad')?.value,
          }),
      ...(getValues('tipo')?.length === 0
        ? {}
        : {
            tipo: getValues('tipo'),
          }),
      ...(getValues('fechaIngreso')?.length === 0
        ? {}
        : {
            fechaIngreso: getValues('fechaIngreso'),
          }),
      ...(getValues('fechaEgreso')?.length === 0
        ? {}
        : {
            fechaEgreso: getValues('fechaEgreso'),
          }),
      ...(getValues('titulo')?.length === 0
        ? {}
        : {
            titulo: getValues('titulo'),
          }),
      ...(getValues('fechaTitulo')?.length === 0
        ? {}
        : {
            fechaTitulo: getValues('fechaTitulo'),
          }),
      ...(getValues('notaPromocionFinal')?.length === 0
        ? {}
        : {
            notaPromocionFinal: getValues('notaPromocionFinal'),
          }),
      ...(getValues('tituloProvicionNro')?.length === 0
        ? {}
        : {
            tituloProvicionNro: getValues('tituloProvicionNro'),
          }),
      ...(getValues('promedioInternado')?.length === 0
        ? {}
        : {
            promedioInternado: getValues('promedioInternado'),
          }),
      ...(getValues('fecha')?.length === 0
        ? {}
        : {
            fecha: getValues('fecha'),
          }),
    }
    dispatch(
      setDataAcademico({
        ...universitarioData,
        universitario: datosGuardar,
      })
    )
  }

  return (
    <Grid container direction={'column'} justifyContent="space-evenly">
      <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, xl: 12 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: '30px',
              fontWeight: 'bold',
            }}
          >
            Paso 2 - Datos Universitarios
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputText
            id={'universidadBoliviana'}
            control={control}
            name="universidadBoliviana"
            label="Univeresidad Boliviana"
            disabled={loading}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputAutocomplete
            id="iduniversidad"
            name="universidad"
            control={control}
            label="Nombre Unversidad"
            disabled={loading}
            rules={{
              required: 'Este campo es requerido',
            }}
            newValues
            forcePopupIcon
            options={universidades.map((item) => ({
              key: item.id,
              label: item.nombre,
              value: item.id,
            }))}
            getOptionLabel={(option) => option.label}
            renderOption={(option) => <>{option.label}</>}
            isOptionEqualToValue={(option, value) =>
              option.label === value.value
            }
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputText
            id={'tipo'}
            control={control}
            name="tipo"
            label="Tipo"
            disabled={loading}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputDate
            id={'fechaIngreso'}
            control={control}
            name="fechaIngreso"
            label="Fecha Ingreso"
            disabled={loading}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputDate
            id={'fechaEgreso'}
            control={control}
            name="fechaEgreso"
            label="Fecha Egreso"
            disabled={loading}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputText
            id={'titulo'}
            control={control}
            name="titulo"
            label="Titulo"
            disabled={loading}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputDate
            id={'fechaTitulo'}
            control={control}
            name="fechaTitulo"
            label="Fecha Titulos"
            disabled={loading}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputText
            id={'notaPromocionFinal'}
            control={control}
            name="notaPromocionFinal"
            type="number"
            label="Nota Promocion Final"
            disabled={loading}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputText
            id={'tituloProvicionNro'}
            control={control}
            name="tituloProvicionNro"
            label="Titulo Provicion Nro"
            disabled={loading}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputText
            id={'promedioInternado'}
            control={control}
            name="promedioInternado"
            type="number"
            label="Promedio internado"
            disabled={loading}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputDate
            id={'fecha'}
            control={control}
            name="fecha"
            label="Fecha"
            disabled={loading}
          />
        </Grid>
      </Grid>
    </Grid>
  )
})

DatosUniversitario.displayName = 'DatosUniversitario'
export default DatosUniversitario
