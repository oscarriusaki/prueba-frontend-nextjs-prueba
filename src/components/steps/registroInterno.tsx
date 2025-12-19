import {
  CertificadoCRUDType,
  CrearEditarCertificadoCRUDType,
} from '@/app/admin/(correspondencias)/certificados/types/certificadosCRUDTypes'
import { Box, Button, DialogActions, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'
import { FormInputText } from '../form/FormInputText'
import { useState } from 'react'
import { useAlerts, useSession } from '@/hooks'
import { delay } from '@/utils/utilidades'
import { Constantes } from '@/config/Constantes'
import { InterpreteMensajes } from '@/utils/InterpreteMensajes'
import { imprimir } from '@/utils/imprimir'
import { SolicitudesCRUDType } from '@/app/admin/(correspondencias)/solicitudes/types/solicitudesCRUDTypes'
import ProgresoLineal from '../progreso/ProgresoLineal'

export interface ModalSolicitudType {
  solicitud?: SolicitudesCRUDType | null
  certificado?: CertificadoCRUDType
}

export const RegistroInterno = ({
  solicitud,
  certificado,
}: ModalSolicitudType) => {
  const [loadingModal, setLoadingModal] = useState<boolean>(false)
  const { sesionPeticion } = useSession()
  const { Alerta } = useAlerts()

  const guardarActualizarCertificado = async (
    data: CrearEditarCertificadoCRUDType
  ) => {
    await guardarActualizarCertificadosPeticion(data)
  }

  const guardarActualizarCertificadosPeticion = async (
    certificado: CrearEditarCertificadoCRUDType
  ) => {
    const dato = {
      nroCertificado: certificado?.nroCertificado,
      nombreCompleto: certificado?.nombreCompleto,
      hospitalFormacion: certificado?.hospitalFormacion,
      periodoFormacion: certificado?.periodoFormacion,
      anioConclucion: certificado?.anioConclucion,
      departamento: certificado?.departamento,
      especialidad: certificado?.especialidad,
      tipo: certificado?.tipo,
      estadoConclucion: certificado?.estadoConclucion,
      registroConclucion: certificado?.registroConclucion,
      ubicacionFile: certificado?.ubicacionFile,
      idSolicitud: 1,
    }

    try {
      setLoadingModal(true)
      await delay(1000)
      const respuesta = await sesionPeticion({
        url: `${Constantes.baseUrl}/certificados${
          certificado.id ? `/${certificado.id}` : ''
        }`,
        method: !!certificado.id ? 'patch' : 'post',
        body: dato,
      })
      Alerta({
        mensaje: InterpreteMensajes(respuesta),
        variant: 'success',
      })
    } catch (e) {
      imprimir(`Error al crear o actualizar certificado`, e)
      Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
    } finally {
      setLoadingModal(false)
    }
  }

  const { handleSubmit, control } = useForm<CrearEditarCertificadoCRUDType>({
    defaultValues: {
      id: solicitud?.id,
      nroCertificado: certificado?.nroCertificado,
      nombreCompleto: certificado?.nombreCompleto,
      hospitalFormacion: certificado?.hospitalFormacion,
      periodoFormacion: certificado?.periodoFormacion,
      anioConclucion: certificado?.anioConclucion,
      departamento: certificado?.departamento,
      especialidad: certificado?.especialidad,
      tipo: certificado?.tipo,
      estadoConclucion: certificado?.estadoConclucion,
      registroConclucion: certificado?.registroConclucion,
      ubicacionFile: certificado?.ubicacionFile,
      solicitud: certificado?.solicitud
        ? {
            key: certificado?.solicitud.id,
            label: certificado?.solicitud.codigoExpediente,
            value: certificado?.solicitud.codigoExpediente,
          }
        : undefined,
    },
  })

  return (
    <form onSubmit={handleSubmit(guardarActualizarCertificado)}>
      <Grid container direction={'column'} justifyContent="space-evenly">
        <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <FormInputText
              id={'nroCertificado'}
              control={control}
              name="nroCertificado"
              label="Nro Certificado"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <FormInputText
              id={'nombreCompleto'}
              control={control}
              name="nombreCompleto"
              label="Nombre Completo"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <FormInputText
              id={'hospitalFormacion'}
              control={control}
              name="hospitalFormacion"
              label="Hospital Formacion"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <FormInputText
              id={'periodoFormacion'}
              control={control}
              name="periodoFormacion"
              label="Periodo Formacion"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <FormInputText
              id={'anioConclucion'}
              control={control}
              name="anioConclucion"
              label="Año Conclusión"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <FormInputText
              id={'departamento'}
              control={control}
              name="departamento"
              label="Departamento"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <FormInputText
              id={'especialidad'}
              control={control}
              name="especialidad"
              label="Especialidad"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <FormInputText
              id={'tipo'}
              control={control}
              name="tipo"
              label="Tipo"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <FormInputText
              id={'estadoConclucion'}
              control={control}
              name="estadoConclucion"
              label="Estado Conclucion"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <FormInputText
              id={'registroConclucion'}
              control={control}
              name="registroConclucion"
              label="Registro Concluciono"
              disabled={loadingModal}
              type="number"
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
            <FormInputText
              id={'ubicacionFile'}
              control={control}
              name="ubicacionFile"
              label="Ubicacion File"
              disabled={loadingModal}
              rules={{ required: 'Este campo es requerido' }}
            />
          </Grid>
        </Grid>
        <Box height={'10px'} />
        <ProgresoLineal mostrar={loadingModal} />
        <Box height={'5px'} />
      </Grid>
      <DialogActions
        sx={{
          my: 1,
          mx: 2,
          justifyContent: 'center',
        }}
      >
        <Button variant={'contained'} disabled={loadingModal} type="submit">
          Guardar
        </Button>
      </DialogActions>
    </form>
  )
}
