'use client'
import { Constantes } from '@/config/Constantes'
import { siteName } from '@/utils/utilidades'
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { BotonFlotantePortal } from './ui/portal/BotonFlotantePortal'
import Footer from './ui/portal/footer'
import { CustomDialog } from '@/components/modales/CustomDialog'
import { InicioCRUDType } from './types/InicioType'
import { VistaModalInicio } from './ui/ModalInicio'
// import { delay } from '@reduxjs/toolkit/src/utils'

const PaginaPortal = () => {
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.only('xs'))
  const sm = useMediaQuery(theme.breakpoints.only('sm'))
  const xl = useMediaQuery(theme.breakpoints.only('xl'))
  const altoNavBar = xs ? 50 : 80
  const seccionInformacionRef = useRef<HTMLDivElement>(null)
  const [esInicio, setEsInicio] = useState(true)
  const [modalInicio, setModalInicio] = useState(false)

  const [inicioEdicion, setInicioEdicion] = useState<
    InicioCRUDType | undefined | null
  >()

  useEffect(() => {
    const handleScroll = () => {
      // Si estamos arriba del todo
      setEsInicio(window.scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleFabClick = () => {
    if (esInicio) {
      // Baja a la sección
      seccionInformacionRef.current?.scrollIntoView({
        behavior: 'smooth',
      })
    } else {
      // Sube arriba
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  const [size, setSize] = useState({
    ancho: window.innerWidth,
    alto: window.innerHeight,
  })

  const agregarInicioModal = () => {
    setInicioEdicion(undefined)
    setModalInicio(true)
  }
  const editarInicioModal = (inicio: InicioCRUDType) => {
    setInicioEdicion(inicio)
    setModalInicio(true)
  }

  const cerrarModalInicio = async () => {
    setModalInicio(false)
    // await delay(500)
    setInicioEdicion(undefined)
  }

  useEffect(() => {
    const handleResize = () => {
      setSize({
        ancho: window.innerWidth,
        alto: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Box
      sx={{
        background: '#000000ff',
      }}
    >
      <CustomDialog
        isOpen={modalInicio}
        handleClose={cerrarModalInicio}
        title="Dejanos tus datos para empezar a jugar"
        maxWidth="sm"
      >
        <VistaModalInicio
          inicio={inicioEdicion}
          accionCorrecta={() => {
            cerrarModalInicio()
          }}
          accionCancelar={cerrarModalInicio}
        />
      </CustomDialog>
      <title>{`Cnidai - ${siteName()}`}</title>
      <Box
        sx={{
          backgroundImage: `url(${Constantes.sitePath}/img/figura-espiral.svg)`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        flexDirection={'column'}
      >
        <Box
          height={`${xs ? size.alto - 50 : size.alto}px`}
          width="100%"
          sx={{
            backgroundImage: {
              xs: `url('/images/img4.png')`,
              xl: `url('/images/img3.png')`,
            },
            backgroundRepeat: 'no-repeat',
            backgroundSize: {
              xs: 'contain',
              sm: 'cover',
            },
            backgroundPosition: {
              xs: 'end',
              sm: 'center',
            },
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
          }}
          flexDirection="column"
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            sx={{
              padding: 2,
              borderRadius: 2,
              display: 'inline-block',
            }}
          >
            <Typography
              variant={`${xs ? 'h6' : 'h5'}`}
              sx={{
                fontWeight: '600',
                textAlign: 'center',
                color: '#ffffffff',
              }}
            >
              Pon a prueba tus conocimientos sobre maquinet.com {xl && <br />}y
              gana una MINIATURA + 01 Kit Maquinet
            </Typography>
          </Box>
        </Box>
        <BotonFlotantePortal
          size={xs ? 'medium' : 'large'}
          accionBoton={handleFabClick}
          esInicio={esInicio}
          margin={xs ? 10 : 50}
        />
        <Box height={`${altoNavBar}`} />
      </Box>
      <br />
      <Box
        ref={seccionInformacionRef}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'row'}
        alignItems={'center'}
      >
        <Grid
          container
          columnSpacing={3}
          display={'flex'}
          flexDirection={'row'}
          rowSpacing={3}
        >
          {xl && (
            <Grid>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: '15px',
                  fontSize: xl ? '20px' : '15px',
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: '700',
                }}
              >
                ¿Como jugar?
              </Button>
            </Grid>
          )}
          <Grid>
            <Button
              variant="contained"
              sx={{
                borderRadius: '15px',
                background: '#fffb00ff',
                fontSize: xl ? '20px' : '15px',
                color: 'black',
                fontWeight: '700',
              }}
              onClick={() => agregarInicioModal()}
            >
              ¡Empieza ahora!
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  )
}

export default PaginaPortal
