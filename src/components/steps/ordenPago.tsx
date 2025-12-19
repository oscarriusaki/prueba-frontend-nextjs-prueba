import {
  CrearEditarSolicitudesCRUDType,
  SolicitudesCRUDType,
} from '@/app/admin/(correspondencias)/solicitudes/types/solicitudesCRUDTypes'
import { Constantes } from '@/config/Constantes'
import { useAlerts, useSession } from '@/hooks'
import { imprimir } from '@/utils/imprimir'
import { InterpreteMensajes } from '@/utils/InterpreteMensajes'
import { delay } from '@/utils/utilidades'
import { Box, Button, DialogContent, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ProgresoLineal from '../progreso/ProgresoLineal'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '@/store/correspondenciaSlice'
import { RootState } from '@/store/store'
import { FormInputCheckbox } from '../form/FormInputCheckbox'

export interface ModalSolicitudType {
  solicitudes?: SolicitudesCRUDType
}

export const OrdenPago = ({ solicitudes }: ModalSolicitudType) => {
  const [loadingModal, setLoadingModal] = useState<boolean>(false)
  const [solicitud, setSolicitud] = useState<SolicitudesCRUDType | null>(null)
  const correspondencia = useSelector(
    (state: RootState) => state.correspondencia
  )

  const guardarActualizarDerivacion = async (
    data: CrearEditarSolicitudesCRUDType
  ) => {
    await guardarActualizarDerivacionsPeticion(data)
  }

  const dispatch = useDispatch()

  const { handleSubmit, control, watch, setValue } =
    useForm<CrearEditarSolicitudesCRUDType>({
      defaultValues: {
        pago: correspondencia.pago ?? false,
      },
    })

  const pagovalue = watch('pago')

  const { sesionPeticion } = useSession()
  const { Alerta } = useAlerts()

  const guardarActualizarDerivacionsPeticion = async (
    derivacion: CrearEditarSolicitudesCRUDType
  ) => {
    const dato = {
      pago: true,
    }

    try {
      setLoadingModal(true)
      await delay(1000)
      const respuesta = await sesionPeticion({
        url: `${Constantes.baseUrl}/solicitudes${
          derivacion.id ? `/${derivacion.id}` : ''
        }`,
        method: !!derivacion.id ? 'patch' : 'post',
        body: dato,
      })
      setSolicitud(respuesta.datos)
      Alerta({
        mensaje: InterpreteMensajes(respuesta),
        variant: 'success',
      })
    } catch (e) {
      imprimir(`Error al crear o actualizar derivacion`, e)
      Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
    } finally {
      setLoadingModal(false)
    }
  }

  useEffect(() => {
    dispatch(
      setData({
        pago: pagovalue,
      })
    )
  }, [pagovalue])

  useEffect(() => {
    if (correspondencia.pago) {
      setValue('pago', correspondencia.pago)
    }
  }, [correspondencia.pago, setValue])

  return (
    <form onSubmit={handleSubmit(guardarActualizarDerivacion)}>
      <DialogContent dividers>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          flexDirection={'column'}
        >
          <Box height={'10px'} />
          <FormInputCheckbox
            id="idPago"
            control={control}
            name="pago"
            label="Pago"
            disabled={loadingModal}
            rules={{ required: 'Este campo es requerido' }}
          />
          <Box height={'10px'} />
          <ProgresoLineal mostrar={loadingModal} />
          <Box height={'5px'} />
          <Button variant={'contained'} disabled={loadingModal} type={'submit'}>
            Guardar
          </Button>
        </Grid>
      </DialogContent>
    </form>
  )
}
