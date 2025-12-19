import { Box, useTheme } from '@mui/material'
import { Icono } from '../Icono'
import CnidaiPaperIcon from './CnidaiPaperIcon'
import CnidaiFlechaInvers from './CnidaiFlechaInvers'
import FiguraSvg from './FiguraSvg'
import FiguraSvgV2 from './FiguraSvgV2'
import FiguraCalidadSvg from './FiguraCalidadSvg'
import FiguraCostoSvg from './FiguraCostoSvg'
import FiguraCuidadoSvg from './FiguraCuidadoSvg'
import IconoCaraCnidai from './IconoCaraCnidaiSvg'
import {
  Email,
  Facebook,
  Instagram,
  WhatsApp,
  YouTube,
} from '@mui/icons-material'
import IconoTwiterSvg from './IconoTwitterSvg'
import IconoRolSvg from './IconoRolSvg'
import { optionType } from '../form/FormInputDropDown'

export const optionsTipoIconoSvg: optionType[] = [
  'ciudadania',
  'cnidaiEnCajon',
  'lapiz',
  'verificar',
  'seguimiento',
  'figuraCalidad',
  'figuraCosto',
  'figuraCuidado',
  'caraLondra',
  'correo',
  'twitter',
  'youtube',
  'whatsapp',
  'facebook',
  'documento',
  'instagram',
  'usuarioCompartir',
].map((item) => ({
  key: `${item}-${Math.floor(Math.random() * 100000)}`,
  value: item,
  label: item,
}))

export type TipoIconoSvgType =
  | 'ciudadania'
  | 'cnidaiEnCajon'
  | 'lapiz'
  | 'verificar'
  | 'seguimiento'
  | 'figura'
  | 'figuraV2'
  | 'figuraCalidad'
  | 'figuraCosto'
  | 'figuraCuidado'
  | 'caraLondra'
  | 'logoLondra'
  | 'portal'
  | 'correo'
  | 'twitter'
  | 'youtube'
  | 'whatsapp'
  | 'facebook'
  | 'logoLondraAgetic'
  | 'documento'
  | 'instagram'
  | 'usuarioCompartir'
  | ''

type Props = {
  color: string
  tipo?: TipoIconoSvgType
  size?: string
  colorFondo?: string
  borderRadius?: number | string
  rotacion?: number
  p?: number
}

export const IconoSvg = ({
  color,
  size = '30px',
  colorFondo,
  borderRadius = 2,
  tipo,
  rotacion,
  p = 1,
}: Props) => {
  const theme = useTheme()
  const mapearColor = (color?: string) => {
    if (!color) return

    switch (color) {
      case 'primary':
        return theme.palette.primary.main
      case 'secondary':
        return theme.palette.secondary.main
      case 'error':
        return theme.palette.error.main
      case 'warning':
        return theme.palette.warning.main
      case 'info':
        return theme.palette.info.main
      case 'success':
        return theme.palette.success.main
      case 'disabled':
        return theme.palette.action.disabled
      case 'inherit':
        return theme.palette.primary.contrastText
      default:
        return color
    }
  }

  return (
    <Box
      sx={{
        p: p,
        bgcolor: colorFondo,
        borderRadius: borderRadius,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {tipo === 'documento' && (
        <Icono sx={{ color: color, fontSize: size }}>topic</Icono>
      )}

      {tipo === 'lapiz' && (
        <Icono sx={{ color: color, fontSize: size }}>
          drive_file_rename_outline
        </Icono>
      )}

      {tipo === 'verificar' && <CnidaiPaperIcon size={size} fill={color} />}

      {tipo === 'seguimiento' && (
        <CnidaiFlechaInvers size={size} fill={color} />
      )}

      {tipo === 'figura' && (
        <FiguraSvg color={color} size={size} rotation={rotacion} />
      )}

      {tipo === 'figuraV2' && (
        <FiguraSvgV2 color={color} size={size} rotation={rotacion} />
      )}

      {tipo === 'figuraV2' && (
        <FiguraSvgV2 color={color} size={size} rotation={rotacion} />
      )}

      {tipo === 'figuraCalidad' && (
        <FiguraCalidadSvg color={color} size={size} />
      )}

      {tipo === 'figuraCosto' && <FiguraCostoSvg color={color} size={size} />}

      {tipo === 'figuraCuidado' && (
        <FiguraCuidadoSvg color={color} size={size} />
      )}

      {tipo === 'caraLondra' && <IconoCaraCnidai color={color} size={size} />}

      {tipo === 'correo' && <Email sx={{ fontSize: size, color: color }} />}

      {tipo === 'twitter' && <IconoTwiterSvg color={color} size={size} />}

      {tipo === 'youtube' && <YouTube sx={{ fontSize: size, color: color }} />}

      {tipo === 'whatsapp' && (
        <WhatsApp sx={{ fontSize: size, color: color }} />
      )}

      {tipo === 'facebook' && (
        <Facebook sx={{ fontSize: size, color: color }} />
      )}

      {tipo === 'instagram' && (
        <Instagram sx={{ fontSize: size, color: color }} />
      )}

      {tipo === 'usuarioCompartir' && (
        <IconoRolSvg
          rol={'COMPARTIDO'}
          color={mapearColor(color)}
          size={size}
          bgColor={colorFondo}
        />
      )}
    </Box>
  )
}
