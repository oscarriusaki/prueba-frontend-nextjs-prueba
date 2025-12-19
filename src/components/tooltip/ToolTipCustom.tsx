import React, { JSXElementConstructor } from 'react'
import { Tooltip, useTheme } from '@mui/material'
import { esDispositivoTactil } from '@/utils'

type TooltipCustomProps = {
  title?: React.ReactNode
  placement?:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'left-start'
    | 'left'
    | 'left-end'
  background?: 'transparent' | 'normal' | 'solid'
  children:
    | React.ReactElement<any, string | JSXElementConstructor<any>>
    | string
  enterDelay?: number
  closeDelay?: number
  mostrarTooltip?: boolean
  closeDelayDispositivoTactil?: number
  cerrarOnclick?: boolean
  conSombra?: boolean
}

export const TooltipCustom: React.FC<TooltipCustomProps> = ({
  title,
  placement = 'top',
  background,
  children,
  enterDelay = 200, //retraso antes de
  mostrarTooltip = true,
  closeDelay = 0,
  closeDelayDispositivoTactil = 0,
  cerrarOnclick = true,
  conSombra = false,
}) => {
  const theme = useTheme()
  const modoOscuro = theme.palette.mode === 'dark'
  const opacityMap: { [key: string]: number } = {
    transparent: 0.1,
    solid: 1,
    normal: 0.5,
    defecto: 0.9,
  }

  const opacity = opacityMap[background || 'defecto'] ?? 0.7
  const [open, setOpen] = React.useState(false)
  const timerIdRef = React.useRef<NodeJS.Timeout | null>(null)
  const leaveTimerIdRef = React.useRef<NodeJS.Timeout | null>(null)

  //stilo del tooltip
  const styleTooltip = {
    arrow: {
      sx: {
        //color: modoOscuro ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
        color: theme.palette.text.disabled,
      },
    },
    tooltip: {
      sx: {
        color: modoOscuro
          ? theme.palette.common.white
          : theme.palette.grey[700],
        backgroundColor: modoOscuro
          ? `rgba(0, 0, 0, ${opacity})`
          : `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: 'blur(2px)',
        border: `solid ${theme.palette.text.disabled} 1.5px`,
        boxShadow: conSombra
          ? modoOscuro
            ? '0px 0px 2px rgba(255, 255, 255, 0.5)'
            : '0px 0px 4px rgba(0, 0, 0, 0.5)'
          : {},
      },
    },
    popper: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 5], //para la separado del title y no exista parpadeo
          },
        },
      ],
    },
  }

  //accion al abrir el tooltip
  const handleOpen = () => {
    if (esDispositivoTactil()) {
      setOpen(true)
      timerIdRef.current = setTimeout(() => {
        setOpen(false)
      }, closeDelayDispositivoTactil) //tiempo para mostrar en dispositivos tactiles
    } else {
      if (leaveTimerIdRef.current) {
        clearTimeout(leaveTimerIdRef.current)
        leaveTimerIdRef.current = null
      }
      timerIdRef.current = setTimeout(() => {
        setOpen(true)
      }, enterDelay) // Retraso antes de mostrar el tooltip con hover
    }
  }

  //accion al cerrar el tooltip
  const handleClose = () => {
    if (esDispositivoTactil()) {
      // Si es un dispositivo táctil, ignora el evento onMouseeave
      return
    }

    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current)
      timerIdRef.current = null
    }
    leaveTimerIdRef.current = setTimeout(() => {
      setOpen(false)
    }, closeDelay) // Retraso antes de ocultar el tooltip
  }

  return (
    <Tooltip
      title={
        mostrarTooltip ? (
          <div
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            style={{ fontSize: '12px' }}
          >
            {title}
          </div>
        ) : (
          ''
        )
      }
      arrow
      placement={placement}
      slotProps={styleTooltip}
      open={open}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      onMouseEnter={handleOpen}
      onClick={cerrarOnclick ? handleClose : undefined}
      onMouseLeave={handleClose}
    >
      {typeof children === 'string' ? <div>{children}</div> : children}
    </Tooltip>
  )
}
