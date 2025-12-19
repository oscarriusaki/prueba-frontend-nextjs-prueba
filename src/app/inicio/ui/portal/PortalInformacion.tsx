import { Button, Card, Theme } from '@mui/material'
import {
  PortalCardsType,
  PortalInformacionType,
} from '../../utils/DatosPaginaInicio'
import { alpha, Box } from '@mui/system'
import { IconoSvg } from '@/components/icons/IconoSvg'
import { TextoResponsive } from '@/components/etiquetaContenido/TextoResponsive'
import { useProgresoLinealPagina } from '@/components/nProgressBar/ProgresoLinealPagina'
import { motion } from 'motion/react'

const CardInfoPortal = ({
  index,
  dato,
  theme,
  isDark,
  cambiarDeRuta,
}: {
  index: number
  dato: PortalCardsType
  theme: Theme
  isDark: boolean
  cambiarDeRuta: (value: string) => void
}) => {
  const i = index % 2 === 0

  const bgColor = i
    ? theme.palette.background.default
    : isDark
      ? theme.palette.grey.A400
      : theme.palette.primary.main

  const bgText = i ? theme.palette.text.primary : '#fff'

  const bgColorBoton = i
    ? isDark
      ? theme.palette.grey.A400
      : theme.palette.primary.main
    : '#fff'

  const bgTextBoton = i
    ? isDark
      ? theme.palette.text.primary
      : theme.palette.primary.contrastText
    : isDark
      ? theme.palette.grey[900]
      : theme.palette.primary.main

  const circuloDegradado = (top: string, right: string, direction: string) => ({
    position: 'absolute' as const,
    zIndex: 1,
    top,
    right,
    width: 300,
    height: 300,
    borderRadius: '50%',
    background: `linear-gradient(to ${direction}, ${alpha(bgColorBoton, 0.3)}, ${alpha(bgColorBoton, 0)})`,
    transform: 'translate(50%, -50%) rotate(45deg)',
  })

  return (
    <Card
      sx={{
        position: 'relative',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        textAlign: 'center',
        minHeight: { xs: '400px', sm: '500px' },
        bgcolor: bgColor,
        color: bgText,
        px: 2,
        py: 2,
        '&:hover': {
          transform: 'scale(1.04)',
        },
        transition: 'transform 0.3s ease',
      }}
    >
      <Box sx={circuloDegradado('-50px', '-50px', 'bottom')} />
      <Box
        sx={circuloDegradado('auto', 'auto', 'top')}
        bottom={'-350px'}
        left={'-350px'}
      />
      <IconoSvg tipo={dato.iconoSvg} color={bgText} size="60px" />
      <TextoResponsive texto={dato.titulo} tipo="titulo3" />
      <TextoResponsive texto={dato.texto} tipo="titulo3" />

      <Button
        sx={{
          borderRadius: 2,
          color: bgTextBoton,
          bgcolor: bgColorBoton,
          '&:hover': {
            bgcolor: alpha(bgColorBoton, 0.8),
            transform: 'scale(1.02',
          },
          transition: 'transform 0.3s ease, background-color 0.3s ease',
          px: 2,
        }}
        onClick={() => {
          if (dato.accion) cambiarDeRuta(dato.accion)
        }}
      >
        <TextoResponsive texto={dato.labelBoton || ''} tipo="titulo5" />
      </Button>
    </Card>
  )
}

type Props = {
  data: PortalInformacionType
  theme: Theme
}

export const PortalInformacion = ({ data, theme }: Props) => {
  const { cambiarDeRuta } = useProgresoLinealPagina()
  const isDark = theme.palette.mode === 'dark'

  return (
    <Box
      sx={{
        py: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
        px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
        maxWidth: '1500px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'left', sm: 'center' },
          alignItems: { xs: 'left', sm: 'center' },
          flexDirection: 'column',
        }}
      >
        <TextoResponsive
          texto={data.titulo}
          tipo="titulo2"
          sx={{ textAlign: { xs: 'left', sm: 'center' }, pt: 1, px: 1 }}
        />
        <TextoResponsive
          p={1}
          texto={data.texto}
          tipo="titulo4"
          color="text.secondary"
          sx={{ mt: 1, textAlign: { xs: 'left', sm: 'center' } }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          pt: { xs: 2, sm: 4 },
          gap: { xs: 2, sm: 4, md: 6 },
        }}
      >
        {data.cards.map((dato, index) => (
          <motion.div
            key={`card-info-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CardInfoPortal
              dato={dato}
              index={index}
              theme={theme}
              isDark={isDark}
              cambiarDeRuta={cambiarDeRuta}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  )
}
