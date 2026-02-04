import { alpha, Box, Button, Card, Theme } from '@mui/material'
import {
  PortalCardsType,
  PortalPrincipalType,
} from '../../utils/DatosPaginaInicio'
import { obtenerColorTheme } from '@/themes/custom-colors'
import { motion } from 'motion/react'
import { boxShadowCustom } from '@/components/botones/BotonCardCanEstilo'
import { IconoSvg } from '@/components/icons/IconoSvg'
import { TextoResponsive } from '@/components/etiquetaContenido/TextoResponsive'
import { useState } from 'react'
import { Icono } from '@/components/Icono'

const CardsPrincipal = ({
  cards,
  bgMain,
  theme,
  xs,
  animacionCards,
}: {
  cards: PortalCardsType[]
  bgMain: string
  theme: Theme
  xs: boolean
  animacionCards: boolean
}) => {
  return (
    <Box
      sx={{
        py: { xs: 3, sm: 5 },
        px: { xs: 1 },
        flexWrap: 'wrap',
        gap: 1.5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {cards.map((dato, index) => {
        const color = dato.color
          ? obtenerColorTheme(dato.color)
          : { dark: bgMain, light: bgMain }
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.2 }}
            animate={animacionCards ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            style={{ minWidth: xs ? '100%' : '100px' }}
          >
            <Card
              sx={{
                p: 1,
                borderRadius: 2,
                display: 'flex',
                boxShadow: boxShadowCustom(theme),
                minWidth: { xs: '100%', sm: '100px' },
                transition: 'transform 0.3s ease, background-color ease',
                zIndex: 1,
              }}
            >
              <Box sx={{ pr: 1 }}>
                <IconoSvg
                  tipo={dato.iconoSvg}
                  colorFondo={alpha(color.light, 0.1)}
                  color={color.light}
                />
              </Box>
              <Box>
                <TextoResponsive texto={dato.titulo} tipo={'titulo4'} />
                <TextoResponsive
                  texto={dato.texto}
                  color={'tex.secondary'}
                  tipo={'titulo5'}
                />
              </Box>
            </Card>
          </motion.div>
        )
      })}
    </Box>
  )
}

type Props = {
  altoNavBar: number
  data: PortalPrincipalType
  theme: Theme
  xs: boolean
  sigla?: string
  cards: PortalCardsType[]
}

export const PortalPrincipal = ({
  data,
  cards,
  altoNavBar,
  theme,
  sigla,
  xs,
}: Props) => {
  const bgMain = theme.palette.primary.main
  const bgPurple = obtenerColorTheme('purple')
  const [animacionCards, setAnimacionCards] = useState(false)
  const circuloDegradado = {
    position: 'abosolute',
    zIndex: -1,
    top: '50%',
    left: -300,
    width: 500,
    height: 500,
    borderRadius: '50%',
    background: `radial-gradient(circle, ${alpha(bgPurple.light, 0.07)} 0%, ${alpha(bgPurple.light, 0.01)} 25%, ${alpha(bgPurple.light, 0)} 50%, ${alpha(bgPurple.light, 0.0)} 75%, ${alpha(bgPurple.light, 0)} 100%)`,
    transform: 'translate(50%, -50%) rotate(45deg)',
  }
  return (
    <Box
      width={'100%'}
      minHeight={{ xs: '100%', md: `calc(100vh - ${altoNavBar}px)` }}
      display={'flex'}
      flexDirection={'column'}
      position={'relative'}
      overflow={'hidden'}
      borderBottom={`1px solid ${theme.palette.divider}`}
    >
      <Box
        sx={{
          minHeight: { xs: `calc(100vh - ${altoNavBar}px)`, md: `100%` },
          display: 'flex',
          position: 'relative',
          alignItems: 'center',
          flexWrap: 'wrap',
          flexDirection: 'column',
          flex: 1,
          py: 2,
        }}
      >
        <Box sx={circuloDegradado} />
        {/*  */}
        <Box
          sx={{
            display: 'flex',
            minWidth: '100%',
            height: '100%',
            flex: 1,
          }}
        >
          <Box
            sx={{
              minWidth: '100%',
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              gap: { xs: 1, sm: 2 },
              position: 'relative',
              pr: { xs: 1, sm: 2, md: 3, lg: 10, xl: 15 },
              pl: { xs: 2, sm: 4, md: 5, lg: 10, xl: 15 },
            }}
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onAnimationComplete={() => setAnimacionCards}
              sx={{
                maxWidth: '650px',
                flexDirection: 'column',
                displa: 'flex',
                justifyContent: 'center',
                gap: { xs: 1, sm: 2 },
                flex: '0 1 auto',
                order: { xs: 2, sm: 2, md: 1 },
                pr: { xs: 2, sm: 4 },
              }}
            >
              <TextoResponsive
                texto={`${data.titulo} ${sigla ? sigla : 'lo Londra'}`}
                tipo="titulo1"
              />
              <TextoResponsive texto={data.descripcion} tipo="titulo4" />

              <Box mt={1}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    color: '#fff',
                    '&:hover': {
                      transform: 'scale(1.03',
                    },
                    transition:
                      'transform 0.5s ease, background-color 0.3s ease',
                    px: 2,
                  }}
                  onClick={() => {
                    window.location.href = data.ruta
                  }}
                >
                  <Icono sx={{ color: '#fff', mr: 1 }}>{data.iconoBoton}</Icono>
                  <TextoResponsive texto={data.labelBoton} tipo="titulo4" />
                </Button>
              </Box>
            </Box>
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              sx={{
                minWidth: '250px',
                minHeight: '240px',
                flex: 1,
                position: 'relative',
                display: 'flex',
                order: { xs: 1, sm: 1, md: 2 },
              }}
            >
              {/* <PortalSvg color={theme.palette.primary.main} size={'100%'} /> */}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: theme.palette.background.paper,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
        }}
      >
        <CardsPrincipal
          cards={cards}
          theme={theme}
          bgMain={bgMain}
          animacionCards={animacionCards}
          xs={xs}
        />
      </Box>
      {!xs && (
        <>
          <Box>
            <IconoSvg
              tipo="figuraV2"
              size="350px"
              color={alpha(theme.palette.primary.main, 0.7)}
            />
          </Box>
          <Box>
            <IconoSvg
              tipo="figura"
              size="150px"
              rotacion={40}
              color={alpha(theme.palette.primary.main, 0.7)}
            />
          </Box>
        </>
      )}
    </Box>
  )
}
