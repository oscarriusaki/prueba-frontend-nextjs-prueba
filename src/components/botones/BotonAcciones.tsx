import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material'
import React, { MouseEventHandler, ReactNode, useState } from 'react'
import { Icono } from '../Icono'

interface TipoAccion {
  color?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  titulo: string
  icono: ReactNode
  accion: MouseEventHandler<any> | undefined
  desactivado?: boolean
  mostrar?: boolean
  name: string
  id: string
}

interface BotonAccionesParams {
  desactivado?: boolean
  color?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  variante?: 'icono' | 'boton'
  texto?: string
  acciones: Array<TipoAccion>
  icono?: ReactNode
  label: string
  id: string
}

export const BotonAcciones = ({
  desactivado,
  color = 'primary',
  acciones = [],
  icono = 'more_horiz',
  variante = 'icono',
  texto = 'acciones',
  label,
  id,
}: BotonAccionesParams) => {
  const [botonAccionAndhorEl, setBotonAccionAndhorEl] =
    useState<null | HTMLElement>(null)

  const desplegarMenu = (event: React.MouseEvent<HTMLElement>) => {
    setBotonAccionAndhorEl(event.currentTarget)
  }

  const cerrarmenu = () => {
    setBotonAccionAndhorEl(null)
  }

  const [openTooltip, setOpenTooltip] = useState<boolean>(false)

  const handleTooltipClose = () => {
    setOpenTooltip(false)
  }

  const handleTooltipOpen = () => {
    setOpenTooltip(true)
  }

  return (
    <Tooltip
      title={label}
      onClose={handleTooltipClose}
      open={openTooltip}
      onMouseOver={() => {
        if (!botonAccionAndhorEl) handleTooltipClose()
      }}
    >
      <span>
        {variante === 'boton' && (
          <Button
            id={id}
            aria-label={label}
            variant={'contained'}
            sx={{ ml: 1, mr: 1 }}
            size={'small'}
            onClick={(event) => {
              handleTooltipClose()
              desplegarMenu(event)
            }}
            color="primary"
            disabled={desactivado}
          >
            {texto}
          </Button>
        )}
        {variante === 'icono' && (
          <IconButton
            id={id}
            aria-label={label}
            size="small"
            onClick={(event) => {
              handleTooltipClose()
              desplegarMenu(event)
            }}
            color="primary"
            disabled={desactivado}
          >
            <Icono>{icono}</Icono>
          </IconButton>
        )}
        <Menu
          id="menu-acciones"
          anchorEl={botonAccionAndhorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(botonAccionAndhorEl)}
          onClose={cerrarmenu}
          autoFocus={false}
        >
          {acciones
            .filter((value) => value.mostrar)
            .map((acciones, index) => (
              <MenuItem
                sx={{ px: 2, py: 1.5, m: 0 }}
                id={acciones.id}
                key={`${index}-accion`}
                onClick={(event) => {
                  cerrarmenu()
                  if (acciones.accion) return acciones.accion(event)
                }}
                disabled={acciones.desactivado}
              >
                <Icono color={acciones.color}>{acciones.icono}</Icono>
                <Box width={'11px'} />
                <Typography variant="body2">{acciones.titulo}</Typography>
              </MenuItem>
            ))}
        </Menu>
      </span>
    </Tooltip>
  )
}
