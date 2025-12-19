import { useTheme } from '@mui/material'
import { usePathname } from 'next/navigation'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useRouter as useRouterNProgress } from 'next-nprogress-bar'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { BackdropVista } from '../progreso/Backdrop'

interface ProgresoLinealPaginaContextProps {
  cambiarDeRuta: (url: string) => void
  loadingPagina: (url: string, titulo?: string) => void
  setLoadingPagina: (value: boolean, titulo?: string) => void
}

const ProgresoLinealPaginaContext =
  createContext<ProgresoLinealPaginaContextProps>({
    cambiarDeRuta: () => {},
    loadingPagina: () => {},
    setLoadingPagina: () => {},
  })

export const NprogressProvider = ({ children }: { children: ReactNode }) => {
  const [cargandoPagina, setCargandoPagina] = useState(false)
  const [tituloCargando, setTituloCargando] = useState('')
  const theme = useTheme()
  const pathname = usePathname()
  const router = useRouterNProgress()

  const cambiarDeRuta = (url: string) => {
    if (pathname !== url) {
      router.push(url)
    }
  }

  const loadingPagina = (url: string, titulo?: string) => {
    if (pathname !== url) {
      setTituloCargando(titulo || 'Cargando página')
      setCargandoPagina(true)
    }
  }

  const setLoadingPagina = (value: boolean, titulo?: string) => {
    setTituloCargando(titulo || '')
    setCargandoPagina(value)
  }

  useEffect(() => {
    setCargandoPagina(false)
  }, [pathname])

  return (
    <ProgresoLinealPaginaContext
      value={{ cambiarDeRuta, loadingPagina, setLoadingPagina }}
    >
      <ProgressBar
        key={theme.palette.primary.main}
        height="3px"
        color={theme.palette.primary.main}
        options={{ showSpinner: false }}
      />

      <BackdropVista
        size={60}
        color="inherit"
        titulo={tituloCargando}
        cargando={cargandoPagina}
        zIndex={theme.zIndex.drawer + 2}
      />
    </ProgresoLinealPaginaContext>
  )
}

export const useProgresoLinealPagina = () =>
  useContext(ProgresoLinealPaginaContext)
