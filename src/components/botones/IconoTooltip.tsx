import React, { FC, MouseEventHandler, ReactNode } from 'react'
import {
  IconButton,
  IconButtonProps,
  SxProps,
  Theme,
  useTheme,
} from '@mui/material'
import { Icono } from '@/components/Icono'
import { IconoSvg, TipoIconoSvgType } from '../icons/IconoSvg'
import { TooltipCustom } from '../tooltip/ToolTipCustom'

export interface Props {
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
  icono?: ReactNode
  iconoSvg?: TipoIconoSvgType
  fontSizeIconoSvg?: string
  accion?: MouseEventHandler<any> | undefined
  desactivado?: boolean
  name: string
  id: string
  fontSize?: 'inherit' | 'large' | 'medium' | 'small'
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
  sx?: SxProps<Theme>
  type?: 'submit'
  iconButtonProps?: IconButtonProps
  variant?: 'contained'
  padingIconButon?: string
  disabled?: boolean
  mostrarTooltip?: boolean
  border?: string
  colorIconoSvg?: string
}

export const IconoTooltip: FC<Props> = ({
  color = 'primary',
  icono,
  iconoSvg,
  titulo,
  accion,
  desactivado = false,
  name,
  id,
  fontSize = 'medium',
  placement = 'top',
  sx,
  type,
  iconButtonProps,
  variant,
  padingIconButon,
  mostrarTooltip = true,
  border,
  fontSizeIconoSvg,
  colorIconoSvg,
}) => {
  const theme = useTheme()
  return (
    <TooltipCustom
      title={titulo}
      mostrarTooltip={mostrarTooltip}
      placement={placement}
    >
      <span>
        <IconButton
          id={id}
          name={name}
          type={type}
          disabled={desactivado}
          classes={{
            root: 'icon-button-root',
            disabled: 'icon-button-disabled',
          }}
          aria-label={titulo}
          onClick={(event) => {
            if (accion) {
              accion(event)
            }
          }}
          {...iconButtonProps}
          style={{
            backgroundColor:
              variant === 'contained' ? theme.palette.primary.main : undefined,
            color:
              variant === 'contained'
                ? theme.palette.getContrastText(theme.palette.primary.main)
                : undefined,
            padding: padingIconButon ? padingIconButon : '',
            border: border || '',
          }}
        >
          {icono ? (
            <Icono
              sx={sx}
              color={
                desactivado
                  ? 'disabled'
                  : variant === 'contained'
                    ? 'inherit'
                    : color
              }
              fontSize={fontSize}
            >
              {' '}
              {icono}
            </Icono>
          ) : (
            iconoSvg && (
              <IconoSvg
                p={0}
                tipo={iconoSvg}
                color={
                  desactivado
                    ? 'disabled'
                    : variant === 'contained'
                      ? 'inherit'
                      : colorIconoSvg || color
                }
                size={fontSizeIconoSvg || '20px'}
              />
            )
          )}
        </IconButton>
      </span>
    </TooltipCustom>
  )
}
