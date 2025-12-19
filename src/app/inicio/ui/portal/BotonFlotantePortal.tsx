import { Icono } from '@/components/Icono'
import { Box, Fab, keyframes } from '@mui/material'

type Props = {
  esInicio: boolean
  size?: 'small' | 'medium' | 'large'
  margin?: number
  accionBoton: () => void
}

const upDownAnimation = keyframes`
0%, 100% {
  transform: translateY(0);
}
50% {
  transform: translateY(-20%);
}
`

export const BotonFlotantePortal = ({
  size,
  esInicio,
  margin,
  accionBoton,
}: Props) => {
  margin = margin ? margin : 50
  return (
    <Box
      sx={{
        position: 'fixed',
        right: `${margin}px`,
        bottom: `${margin}px`,
        animation: `${upDownAnimation} 2.3s ease-in-out infinite`,
        zIndex: 2,
      }}
    >
      <Fab
        color={'primary'}
        size={size}
        onClick={accionBoton}
        sx={{
          background: '#fffb00ff',
          '&:hover': {
            backgroundColor: '#fffb00ff',
          },
        }}
      >
        <Icono
          color={'inherit'}
          sx={{
            background: '#fffb00ff',
          }}
        >
          {esInicio
            ? 'keyboard_arrow_down'
            : 'keyboard_arrow_up keyboard_arrow_down'}
        </Icono>
      </Fab>
    </Box>
  )
}
