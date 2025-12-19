import { SxProps, Theme, Typography } from '@mui/material'
import React from 'react'

type TypographyType = {
  fontSize: string
  weight: number
  lineHeight?: string
}

type PortalTipografiaType = Record<TituloResponsiveType, TypographyType>

const inicialTyp: PortalTipografiaType = {
  titulo1: { fontSize: 'clamp(24px, 5vw, 36px)', weight: 600 },
  titulo2: { fontSize: 'clamp(20px, 4vw, 28px)', weight: 500 },
  titulo3: { fontSize: 'clamp(18px, 3.5vw, 23px)', weight: 500 },
  titulo4: { fontSize: 'clamp(16px, 2.5vw, 18px)', weight: 400 },
  titulo5: { fontSize: 'clamp(14px, 2.5vw, 16px)', weight: 400 },
  titulo6: { fontSize: 'clamp(12px, 2vw, 14px)', weight: 400 },
}

export type TituloResponsiveType =
  | 'titulo1'
  | 'titulo2'
  | 'titulo3'
  | 'titulo4'
  | 'titulo5'
  | 'titulo6'

type Props = {
  texto: string
  tipo: TituloResponsiveType
  color?: string
  align?: 'left' | 'right' | 'center' | 'justify'
  p?: string | number
  sx?: SxProps<Theme>
}

export const TextoResponsive: React.FC<Props> = ({
  sx,
  texto,
  tipo,
  color = 'inherit',
  align,
  p,
}) => {
  const tipoGrafia = React.useMemo(() => inicialTyp[tipo], [tipo])

  return (
    <Typography
      fontSize={tipoGrafia.fontSize}
      fontWeight={tipoGrafia.weight}
      lineHeight={tipoGrafia.lineHeight}
      color={color}
      textAlign={align}
      sx={sx}
      p={p}
    >
      {texto}
    </Typography>
  )
}
