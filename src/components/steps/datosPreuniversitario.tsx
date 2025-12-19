import { PreuniversitarioCRUDType } from '@/app/admin/(principal)/datos_academicos/types/preuniversitarioCRUDType'
import { Grid, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormInputText } from '../form/FormInputText'
import { forwardRef, useImperativeHandle } from 'react'
import { setDataAcademico } from '@/store/academicoSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { FormInputDate } from '../form/FormInputDate'

export interface DatosPreuniversitarioType {
  preuniversitario?: PreuniversitarioCRUDType | null
  loading: boolean
}

export interface DatosPreuniversitarioHandle {
  guardarDatosDePaso: () => void
}

const DatosPreuniversitario = forwardRef<
  DatosPreuniversitarioHandle,
  DatosPreuniversitarioType
>(({ preuniversitario, loading }, ref) => {
  const preuniversitarioData = useSelector(
    (state: RootState) => state.academico
  )
  const dispatch = useDispatch()
  useImperativeHandle(ref, () => ({
    guardarDatosDePaso,
  }))
  const { control, getValues } = useForm<PreuniversitarioCRUDType>({
    defaultValues: {
      id: preuniversitario?.id ?? preuniversitarioData?.preuniversitario?.id,
      colegio:
        preuniversitario?.colegio ??
        preuniversitarioData?.preuniversitario?.colegio,
      tipo:
        preuniversitario?.tipo ?? preuniversitarioData?.preuniversitario?.tipo,
      titulo:
        preuniversitario?.titulo ??
        preuniversitarioData?.preuniversitario?.titulo,
      fechaTitulacion:
        preuniversitario?.fechaTitulacion ??
        preuniversitarioData?.preuniversitario?.fechaTitulacion,
      otrosEstudios:
        preuniversitario?.otrosEstudios ??
        preuniversitarioData?.preuniversitario?.otrosEstudios,
    },
  })

  const guardarDatosDePaso = () => {
    const datosGuardar: PreuniversitarioCRUDType = {
      ...(getValues('id')?.length === 0
        ? {}
        : {
            id: getValues('id'),
          }),
      ...(getValues('colegio')?.length === 0
        ? {}
        : {
            colegio: getValues('colegio'),
          }),
      ...(getValues('tipo')?.length === 0
        ? {}
        : {
            tipo: getValues('tipo'),
          }),
      ...(getValues('titulo')?.length === 0
        ? {}
        : {
            titulo: getValues('titulo'),
          }),
      ...(getValues('fechaTitulacion')?.length === 0
        ? {}
        : {
            fechaTitulacion: getValues('fechaTitulacion'),
          }),
      ...(getValues('otrosEstudios')?.length === 0
        ? {}
        : {
            otrosEstudios: getValues('otrosEstudios'),
          }),
      ...(getValues('estado')?.length === 0
        ? {}
        : {
            estado: getValues('estado'),
          }),
    }

    dispatch(
      setDataAcademico({
        ...preuniversitarioData,
        preuniversitario: datosGuardar,
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
            Paso 1 - Datos Preuniversitarios
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputText
            id={'colegio'}
            control={control}
            name="colegio"
            label="Colegio"
            disabled={loading}
            rules={{ required: 'Este campo es requerido' }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputText
            id={'tipo'}
            control={control}
            name="tipo"
            label="Tipo"
            disabled={loading}
            rules={{ required: 'Este campo es requerido' }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputText
            id={'titulo'}
            control={control}
            name="titulo"
            label="Titulo"
            disabled={loading}
            rules={{ required: 'Este campo es requerido' }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputDate
            id={'fechaTitulacion'}
            control={control}
            name="fechaTitulacion"
            label="Fecha Titulacion"
            disabled={loading}
            rules={{ required: 'Este campo es requerido' }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <FormInputText
            id={'otrosEstudios'}
            control={control}
            name="otrosEstudios"
            label="Otros Estudios"
            disabled={loading}
            rules={{ required: 'Este campo es requerido' }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
})

DatosPreuniversitario.displayName = 'DatosPreuniversitario'
export default DatosPreuniversitario
