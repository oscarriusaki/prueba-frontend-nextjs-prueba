import { Box, Grid, Typography } from '@mui/material'
import { useFieldArray, useForm } from 'react-hook-form'
import { FormInputText } from '../form/FormInputText'
import {
  PostUniversitarioCRUDType,
  PostUniversitarioCRUDTypeData,
} from '@/app/admin/(principal)/datos_academicos/types/postUniversitarioCRUDType'
import { ResidenciaMedicaForm } from '@/app/admin/(principal)/datos_academicos/ui/FormResidenciaMedica'
import { forwardRef, useImperativeHandle } from 'react'
import { CursosForm } from '@/app/admin/(principal)/datos_academicos/ui/FormCursos'
import { ExperienciaForm } from '@/app/admin/(principal)/datos_academicos/ui/FormExperiencia'
import { DocenciaForm } from '@/app/admin/(principal)/datos_academicos/ui/FormDocencia'
import { TrabajoInvestigacionForm } from '@/app/admin/(principal)/datos_academicos/ui/FormTrabajoInvestigacion'
import { IdiomasForm } from '@/app/admin/(principal)/datos_academicos/ui/FormIdioma'
import { useDispatch, useSelector } from 'react-redux'
import { setDataAcademico } from '@/store/academicoSlice'
import { RootState } from '../../store/store'
import { DepartamentoCRUDType } from '@/app/admin/(residencia)/departamentos/types/departamentosCRUDTypes'

export interface DatosPostUniversitarioType {
  postUniversitario?: PostUniversitarioCRUDType | null
  departamentos: DepartamentoCRUDType[]
  loading: boolean
}

export interface DatosPostUniversitarioHandle {
  guardarDatosDePaso: () => void
}

const DatosPostUniversitario = forwardRef<
  DatosPostUniversitarioHandle,
  DatosPostUniversitarioType
>(({ postUniversitario, departamentos, loading }, ref) => {
  const universitarioData = useSelector((state: RootState) => state.academico)
  const dispatch = useDispatch()
  useImperativeHandle(ref, () => ({
    guardarDatosDePaso,
  }))

  const { control, getValues } = useForm<PostUniversitarioCRUDTypeData>({
    defaultValues: {
      id: postUniversitario?.id ?? universitarioData?.postUniversitario?.id,
      servicioSocialRural:
        postUniversitario?.servicioSocialRural ??
        universitarioData?.postUniversitario?.servicioSocialRural,
      anioInicio:
        postUniversitario?.anioInicio ??
        universitarioData?.postUniversitario?.anioInicio,
      anioFin:
        postUniversitario?.anioFin ??
        universitarioData?.postUniversitario?.anioFin,
      residenciaMedica:
        postUniversitario?.residenciaMedica ??
        universitarioData?.postUniversitario?.residenciaMedica,
      cursos:
        postUniversitario?.cursos ??
        universitarioData?.postUniversitario?.cursos,
      experiencia: (
        postUniversitario?.experiencia ??
        universitarioData?.postUniversitario?.experiencia ??
        []
      ).map((item) => {
        if (!item) return undefined

        return {
          id: item?.id ?? '',
          nombre: item?.nombre ?? '',
          establecimiento: item?.establecimiento ?? '',
          anio: item?.anio ?? '',
          departamento:
            item?.departamento && item.departamento.id
              ? {
                  key: item.departamento.id,
                  label: item.departamento.nombre,
                  value: item.departamento.id,
                }
              : undefined,
        }
      }),
      docenciaUniversitaria:
        postUniversitario?.docenciaUniversitaria ??
        universitarioData?.postUniversitario?.docenciaUniversitaria,
      trabajoInvestigacion:
        postUniversitario?.trabajoInvestigacion ??
        universitarioData?.postUniversitario?.trabajoInvestigacion,
      idioma:
        postUniversitario?.idioma ??
        universitarioData?.postUniversitario?.idioma,
    },
  })

  const {
    fields: fieldsResidenciaMedica,
    append: appendResidenciaMedica,
    remove: removeResidenciaMedica,
  } = useFieldArray<PostUniversitarioCRUDTypeData, 'residenciaMedica'>({
    name: 'residenciaMedica',
    control: control,
  })

  const {
    fields: fieldsCursos,
    append: appendCursos,
    remove: removeCursos,
  } = useFieldArray<PostUniversitarioCRUDTypeData, 'cursos'>({
    name: 'cursos',
    control: control,
  })

  const {
    fields: fieldsExperiencia,
    append: appendExperiencia,
    remove: removeExperiencia,
  } = useFieldArray<PostUniversitarioCRUDTypeData, 'experiencia'>({
    name: 'experiencia',
    control: control,
  })

  const {
    fields: fieldsDocenciaUniversitaria,
    append: appendDocenciaUniversitaria,
    remove: removeDocenciaUniversitaria,
  } = useFieldArray<PostUniversitarioCRUDTypeData, 'docenciaUniversitaria'>({
    name: 'docenciaUniversitaria',
    control: control,
  })

  const {
    fields: fieldsTrabajoInvestigacion,
    append: appendTrabajoInvestigacion,
    remove: removeTrabajoInvestigacion,
  } = useFieldArray<PostUniversitarioCRUDTypeData, 'trabajoInvestigacion'>({
    name: 'trabajoInvestigacion',
    control: control,
  })

  const {
    fields: fieldsIdioma,
    append: appendIdioma,
    remove: removeIdioma,
  } = useFieldArray<PostUniversitarioCRUDTypeData, 'idioma'>({
    name: 'idioma',
    control: control,
  })

  const guardarDatosDePaso = () => {
    const datosGuardar: PostUniversitarioCRUDType = {
      ...(getValues('id')?.length === 0
        ? {}
        : {
            id: getValues('id'),
          }),
      ...(getValues('servicioSocialRural')?.length === 0
        ? {}
        : {
            servicioSocialRural: getValues('servicioSocialRural'),
          }),
      ...(getValues('anioInicio')?.length === 0
        ? {}
        : {
            anioInicio: getValues('anioInicio'),
          }),
      ...(getValues('anioFin')?.length === 0
        ? {}
        : {
            anioFin: getValues('anioFin'),
          }),
      ...(getValues('residenciaMedica')?.length === 0
        ? {}
        : {
            residenciaMedica: getValues('residenciaMedica')?.map((item) => ({
              ...(item.id?.length === 0
                ? {}
                : {
                    id: item.id,
                  }),
              ...(item.maestria?.length === 0
                ? {}
                : {
                    maestria: item.maestria,
                  }),
              ...(item.desde?.length === 0
                ? {}
                : {
                    desde: item.desde,
                  }),
              ...(item.hasta?.length === 0
                ? {}
                : {
                    hasta: item.hasta,
                  }),
              ...(item.estado?.length === 0
                ? {}
                : {
                    estado: item.estado,
                  }),
            })),
          }),
      ...(getValues('cursos')?.length === 0
        ? {}
        : {
            cursos: getValues('cursos')?.map((item) => ({
              ...(item.id?.length === 0
                ? {}
                : {
                    id: item.id,
                  }),
              ...(item.tipo?.length === 0
                ? {}
                : {
                    tipo: item.tipo,
                  }),
              ...(item.anio?.length === 0
                ? {}
                : {
                    anio: item.anio,
                  }),
              ...(item.nombreCertificado?.length === 0
                ? {}
                : {
                    nombreCertificado: item.nombreCertificado,
                  }),
              ...(item.lugar?.length === 0
                ? {}
                : {
                    lugar: item.lugar,
                  }),
              ...(item.institulo?.length === 0
                ? {}
                : {
                    institulo: item.institulo,
                  }),
              ...(item.tipoParticipacion?.length === 0
                ? {}
                : {
                    tipoParticipacion: item.tipoParticipacion,
                  }),
              ...(item.estado?.length === 0
                ? {}
                : {
                    estado: item.estado,
                  }),
            })),
          }),
      ...(getValues('experiencia')?.length === 0
        ? {}
        : {
            experiencias: getValues('experiencia')?.map((item) => ({
              ...(item.id?.length === 0
                ? {}
                : {
                    id: item.id,
                  }),
              ...(item.nombre?.length === 0
                ? {}
                : {
                    nombre: item.nombre,
                  }),
              ...(item.establecimiento?.length === 0
                ? {}
                : {
                    establecimiento: item.establecimiento,
                  }),
              ...(item.anio?.length === 0
                ? {}
                : {
                    anio: item.anio,
                  }),
              ...(item?.departamento?.value.length === 0
                ? {}
                : {
                    idDepartamento: item.departamento?.value,
                  }),
            })),
          }),
      ...(getValues('docenciaUniversitaria')?.length === 0
        ? {}
        : {
            docenciaUniversitaria: getValues('docenciaUniversitaria')?.map(
              (item) => ({
                ...(item.id?.length === 0
                  ? {}
                  : {
                      id: item.id,
                    }),
                ...(item.condicion?.length === 0
                  ? {}
                  : {
                      condicion: item.condicion,
                    }),
                ...(item.materia?.length === 0
                  ? {}
                  : {
                      materia: item.materia,
                    }),
                ...(item.universidad?.length === 0
                  ? {}
                  : {
                      universidad: item.universidad,
                    }),
                ...(item.fechaInicio?.length === 0
                  ? {}
                  : {
                      fechaInicio: item.fechaInicio,
                    }),
                ...(item.fechaFin?.length === 0
                  ? {}
                  : {
                      fechaFin: item.fechaFin,
                    }),
                ...(item.departamento?.length === 0
                  ? {}
                  : {
                      departamento: item.departamento,
                    }),
                ...(item.estado?.length === 0
                  ? {}
                  : {
                      estado: item.estado,
                    }),
              })
            ),
          }),
      ...(getValues('trabajoInvestigacion')?.length === 0
        ? {}
        : {
            trabajoInvestigacion: getValues('trabajoInvestigacion')?.map(
              (item) => ({
                ...(item.id?.length === 0
                  ? {}
                  : {
                      id: item.id,
                    }),
                ...(item.investigacion?.length === 0
                  ? {}
                  : {
                      investigacion: item.investigacion,
                    }),
                ...(item.fechaPublicacion?.length === 0
                  ? {}
                  : {
                      fechaPublicacion: item.fechaPublicacion,
                    }),
                ...(item.renumerado?.length === 0
                  ? {}
                  : {
                      renumerado: item.renumerado,
                    }),
                ...(item.estado?.length === 0
                  ? {}
                  : {
                      estado: item.estado,
                    }),
              })
            ),
          }),
      ...(getValues('idioma')?.length === 0
        ? {}
        : {
            idioma: getValues('idioma')?.map((item) => ({
              ...(item.id?.length === 0
                ? {}
                : {
                    id: item.id,
                  }),
              ...(item.nombre?.length === 0
                ? {}
                : {
                    nombre: item.nombre,
                  }),
              ...(item.habla?.length === 0
                ? {}
                : {
                    habla: item.habla,
                  }),
              ...(item.lee?.length === 0
                ? {}
                : {
                    lee: item.lee,
                  }),
              ...(item.escribe?.length === 0
                ? {}
                : {
                    escribe: item.escribe,
                  }),
            })),
          }),
      ...(getValues('estado')?.length === 0
        ? {}
        : {
            estado: getValues('estado'),
          }),
    }
    dispatch(
      setDataAcademico({
        ...universitarioData,
        postUniversitario: datosGuardar,
        // ...(datosGuardar && { importante: datosGuardar }),
      })
    )
  }

  return (
    <Grid container direction={'column'} justifyContent="space-evenly">
      <Grid container direction="row" columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: '30px', fontWeight: 'bold' }}
          >
            Paso 3 - Datos Post Universitarios
          </Typography>
        </Grid>
        <Grid size={{ xs: 7, sm: 7, md: 7 }}>
          <FormInputText
            id={'servicioSocialRural'}
            control={control}
            name="servicioSocialRural"
            label="Servicios Social Rutal Obligatorio"
            disabled={loading}
            rules={{ required: 'Este campo es requerido' }}
          />
        </Grid>
        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          <FormInputText
            id={'anioInicio'}
            control={control}
            name="anioInicio"
            label="Anio inicio"
            disabled={loading}
            rules={{ required: 'Este campo es requerido' }}
          />
        </Grid>
        <Grid size={{ xs: 2, sm: 2, md: 2 }}>
          <FormInputText
            id={'anioFin'}
            control={control}
            name="anioFin"
            label="Anio fin"
            disabled={loading}
            rules={{ required: 'Este campo es requerido' }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <ResidenciaMedicaForm
            loadingForm={loading}
            fields={fieldsResidenciaMedica}
            append={appendResidenciaMedica}
            remove={removeResidenciaMedica}
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <CursosForm
            loadingForm={loading}
            fields={fieldsCursos}
            append={appendCursos}
            remove={removeCursos}
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <ExperienciaForm
            loadingForm={loading}
            departamentos={departamentos}
            fields={fieldsExperiencia}
            append={appendExperiencia}
            remove={removeExperiencia}
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <DocenciaForm
            loadingForm={loading}
            fields={fieldsDocenciaUniversitaria}
            append={appendDocenciaUniversitaria}
            remove={removeDocenciaUniversitaria}
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <TrabajoInvestigacionForm
            loadingForm={loading}
            fields={fieldsTrabajoInvestigacion}
            append={appendTrabajoInvestigacion}
            remove={removeTrabajoInvestigacion}
            control={control}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12 }}>
          <IdiomasForm
            loadingForm={loading}
            fields={fieldsIdioma}
            append={appendIdioma}
            remove={removeIdioma}
            control={control}
          />
        </Grid>
      </Grid>
      <Box height={'10px'} />
    </Grid>
  )
})

DatosPostUniversitario.displayName = 'DatosPostUniversitario'
export default DatosPostUniversitario
