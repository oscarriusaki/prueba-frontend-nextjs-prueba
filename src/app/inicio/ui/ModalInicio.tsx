import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, DialogActions, DialogContent, Grid } from '@mui/material'
import { useAlerts, useSession } from '@/hooks'
import { Constantes } from '@/config/Constantes'
import { imprimir } from '@/utils/imprimir'
import ProgresoLineal from '@/components/progreso/ProgresoLineal'
import { delay } from '@/utils/utilidades'
import { InterpreteMensajes } from '@/utils/InterpreteMensajes'
import { FormInputText } from '@/components/form/FormInputText'
import { CrearEditarInicioCRUDType, InicioCRUDType } from '../types/InicioType'
import { FormInputCheckbox } from '@/components/form/FormInputCheckbox'
import { Servicios } from '@/services'

export interface ModalInicioType {
  inicio?: InicioCRUDType | null
  accionCorrecta: () => void
  accionCancelar: () => void
}

export const VistaModalInicio = ({
  inicio,
  accionCorrecta,
  accionCancelar,
}: ModalInicioType) => {
  const [loadingModal, setLoadingModal] = useState<boolean>(false)

  // Hook para mostrar alertas
  const { Alerta } = useAlerts()

  // Proveedor de la sesión
  const { sesionPeticion } = useSession()

  const { handleSubmit, control } = useForm<CrearEditarInicioCRUDType>({
    defaultValues: {
      id: inicio?.id,
      nombre: inicio?.nombre,
      apellido: inicio?.apellido,
      carnet: inicio?.carnet,
      correo: inicio?.correo,
      telefono: inicio?.telefono,
      terminos: inicio?.terminos,
    },
  })

  const guardarActualizarInicio = async (data: CrearEditarInicioCRUDType) => {
    await guardarActualizarIniciosPeticion(data)
  }

  const guardarActualizarIniciosPeticion = async (
    inicio: CrearEditarInicioCRUDType
  ) => {
    try {
      setLoadingModal(true)
      await delay(1000)
      const respuesta = await Servicios.post({
        url: `${Constantes.baseUrl}/clientes`,
        body: inicio,
      })
      Alerta({
        mensaje: InterpreteMensajes(respuesta),
        variant: 'success',
      })
      accionCorrecta()
    } catch (e) {
      imprimir(`Error al crear o actualizar inicios`, e)
      Alerta({ mensaje: `${InterpreteMensajes(e)}`, variant: 'error' })
    } finally {
      setLoadingModal(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(guardarActualizarInicio)}
      style={{
        background: '#000000ff',
      }}
    >
      <DialogContent
        dividers
        sx={{
          backgroundColor: '#000000ff',
          backdropFilter: 'blur(6px)',
        }}
      >
        <Grid container direction={'column'} justifyContent="space-evenly">
          <Grid container direction="row" spacing={{ xs: 2, sm: 1, md: 2 }}>
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
              <FormInputText
                id={'nombre'}
                control={control}
                name="nombre"
                label="Nombre "
                disabled={loadingModal}
                rules={{ required: 'Este campo es requerido' }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
              <FormInputText
                id={'apellido'}
                control={control}
                name="apellido"
                label="Apellido"
                disabled={loadingModal}
                rules={{ required: 'Este campo es requerido' }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
              <FormInputText
                id={'carnet'}
                control={control}
                name="carnet"
                label="Carnet"
                disabled={loadingModal}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
              <FormInputText
                id={'correo'}
                control={control}
                name="correo"
                label="Correo"
                disabled={loadingModal}
                rules={{ required: 'Este campo es requerido' }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12 }}>
              <FormInputText
                id={'telefono'}
                control={control}
                name="telefono"
                label="Telefono"
                disabled={loadingModal}
                rules={{ required: 'Este campo es requerido' }}
              />
            </Grid>
          </Grid>
          <FormInputCheckbox
            id={`check`}
            control={control}
            name={`terminos`}
            label="Terminos y condiciones"
            disabled={loadingModal}
          />
          <Box height={'10px'} />
          <ProgresoLineal mostrar={loadingModal} />
          <Box height={'5px'} />
        </Grid>
      </DialogContent>
      <DialogActions
        sx={{
          paddingBottom: '15px',
          display: 'flex',
          justifyContent: 'center',
          background: '#000000ff',
        }}
      >
        <Button
          variant={'contained'}
          sx={{
            background: '#fffb00ff',
            fontWeight: '700',
            borderRadius: '15px ',
          }}
          disabled={loadingModal}
          type={'submit'}
        >
          ¡Jugar Ahora!
        </Button>
      </DialogActions>
    </form>
  )
}
