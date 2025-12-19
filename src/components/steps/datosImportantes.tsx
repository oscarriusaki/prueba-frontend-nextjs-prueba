import { Grid, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormInputText } from '../form/FormInputText'
import { forwardRef, useImperativeHandle } from 'react'
import { setDataAcademico } from '@/store/academicoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { ImportanteCRUDType } from '@/app/admin/(principal)/datos_academicos/types/importanteCRUDType'

export interface DatosImportantesType {
  datosImportantes?: ImportanteCRUDType | null
  loading: boolean
}

export interface DatosImportantesHandle {
  guardarDatosDePaso: () => void
}

const DatosImportantes = forwardRef<
  DatosImportantesHandle,
  DatosImportantesType
>(({ datosImportantes, loading }, ref) => {
  const importanteData = useSelector((state: RootState) => state.academico)
  const dispatch = useDispatch()
  useImperativeHandle(ref, () => ({
    guardarDatosDePaso,
  }))

  const { control, getValues, formState } = useForm<ImportanteCRUDType>({
    defaultValues: {
      id: datosImportantes?.id ?? importanteData?.importante?.id,
      departamentoFormador:
        datosImportantes?.departamentoFormador ??
        importanteData?.importante?.departamentoFormador,
      especialidad:
        datosImportantes?.especialidad ??
        importanteData?.importante?.especialidad,
      lugarInscripcion:
        datosImportantes?.lugarInscripcion ??
        importanteData?.importante?.lugarInscripcion,
    },
  })

  const guardarDatosDePaso = () => {
    const datosGuardar: ImportanteCRUDType = {
      ...(getValues('id')?.length === 0
        ? {}
        : {
            id: getValues('id'),
          }),
      ...(getValues('departamentoFormador')?.length === 0
        ? {}
        : {
            departamentoFormador: getValues('departamentoFormador'),
          }),
      ...(getValues('especialidad')?.length === 0
        ? {}
        : {
            especialidad: getValues('especialidad'),
          }),
      ...(getValues('lugarInscripcion')?.length === 0
        ? {}
        : {
            lugarInscripcion: getValues('lugarInscripcion'),
          }),
      ...(getValues('estado')?.length === 0
        ? {}
        : {
            estado: getValues('estado'),
          }),
    }
    dispatch(
      setDataAcademico({
        ...importanteData,
        importante: datosGuardar,
        // ...(datosGuardar && { importante: datosGuardar }),
      })
    )
  }

  return (
    <Grid container direction={'column'} justifyContent="space-evenly">
      <Grid container direction="row" spacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: '30px', fontWeight: 'bold' }}
          >
            Paso 4 - Datos Importantes
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputText
            id={'departamentoFormador'}
            control={control}
            name="departamentoFormador"
            label="Departamento Formador"
            disabled={loading}
            rules={{ required: 'Este campo es requerido' }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputText
            id={'especialidad'}
            control={control}
            name="especialidad"
            label="Especialidad"
            disabled={loading}
            rules={{ required: 'Este campo es requerido' }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputText
            id={'lugarInscripcion'}
            control={control}
            name="lugarInscripcion"
            label="Lugar Inscripcion"
            disabled={loading}
            rules={{ required: 'Este campo es requerido' }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
})

DatosImportantes.displayName = 'DatosImportantes'
export default DatosImportantes
