import { boxShadowCustom } from '@/components/botones/BotonCardCanEstilo'
import ThemeSwitcherButton from '@/components/botones/ThemeSwitcherButton'
import { TextoResponsive } from '@/components/etiquetaContenido/TextoResponsive'
import { Icono } from '@/components/Icono'
import { IconoSvg } from '@/components/icons/IconoSvg'
import { Constantes } from '@/config/Constantes'
import {
  alpha,
  AppBar,
  Box,
  Button,
  CssBaseline,
  Slide,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material'
import { useRouter } from 'next/navigation'

interface Props {
  altoNavBar: number
  strollTop: boolean
}

function HideOnScroll({ altoNavBar, strollTop }: Props) {
  const theme = useTheme()
  const isDark = theme.palette.mode === 'dark'
  const xs = useMediaQuery(theme.breakpoints.only('xs'))
  const trigger = useScrollTrigger({
    target: typeof window !== 'undefined' ? window : undefined,
  })

  const router = useRouter()
  const inicio = () => {
    router.push('/login')
  }

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        sx={{
          background: alpha(
            theme.palette.background.paper,
            strollTop ? 0 : 0.5
          ),
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            borderBottom: strollTop ? {} : `solid ${theme.palette.divider} 1px`,
            boxShadow: strollTop ? {} : boxShadowCustom(theme),
            height: `${altoNavBar}px`,
          }}
        >
          {/* <IconoSvg
            tipo={'logoLondraAgetic'}
            color={theme.palette.primary.main}
            size={`${altoNavBar - 25}px`}
          /> */}
          <Box
            display={'flex'}
            sx={{
              ml: xs ? 1 : 2,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ThemeSwitcherButton color="secondary" />
            <Button
              variant="contained"
              sx={{
                borderRadius: 2,
                fontWeight: '500',
                color: '#fff',
                ml: 1,
              }}
              onClick={inicio}
            >
              {xs ? (
                <Icono sx={{ color: 'white' }}>login</Icono>
              ) : (
                <>
                  <IconoSvg
                    tipo={'caraLondra'}
                    color={'#fff'}
                    size={'20px'}
                    p={0}
                  />
                  <TextoResponsive
                    texto={'Iniciar sesión'}
                    tipo="titulo5"
                    sx={{ ml: 1 }}
                  />
                </>
              )}
            </Button>
          </Box>
        </Box>
      </AppBar>
    </Slide>
  )
}

export default function AppBarHideInicio(props: Props) {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props} />
    </>
  )
}
