'use client'
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
  createContext,
} from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { guardarCookie, leerCookie } from '@/utils'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { lightTheme } from './light-theme'
import { darkTheme } from './dark-themes'

const DARK_SCHEME_QUERY = '(prefers-color-scheme: dark)'

type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
  themeMode: ThemeMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)
export const useThemeContext = () => useContext(ThemeContext)
export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const isDarkOs = useMediaQuery(DARK_SCHEME_QUERY, { noSsr: true })

  const isMountRef = useRef(false)

  const [themeMode, setThemeMode] = useState<ThemeMode | null>(null)

  const debounced = useDebouncedCallback(() => {
    isMountRef.current = true
  }, 500)

  const guardarModoOscuro = () => {
    setThemeMode('dark')
    guardarCookie('themeMode', 'dark')
  }

  const guardarModoClaro = () => {
    setThemeMode('light')
    guardarCookie('themeMode', 'light')
  }

  const guardarModoAutomatico = () => {
    setThemeMode(isDarkOs ? 'dark' : 'light')
    guardarCookie('themeMode', isDarkOs ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    switch (themeMode) {
      case 'light':
        guardarModoOscuro()
        break
      case 'dark':
        guardarModoClaro()
        break
      default:
    }
  }

  useEffect(() => {
    const themeModeSaved = leerCookie('themeMode')

    if (!themeMode) {
      guardarModoAutomatico()
      isMountRef.current = false
      return
    }

    switch (themeModeSaved) {
      case 'dark':
        guardarModoOscuro()
        break
      case 'light':
        guardarModoClaro()
        break
      default:
        guardarModoClaro()
        break
    }
    isMountRef.current = false
    return
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (isMountRef.current) {
      guardarModoAutomatico()
    }
    debounced()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkOs])

  // TODO revisar esto del hidratacion
  if (themeMode === null) return null

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </ThemeContext.Provider>
  )
}
