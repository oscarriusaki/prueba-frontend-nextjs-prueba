'use client'
import { FullScreenLoading } from '@/components/FullScreenLoading'
import AlertProvider from '@/context/AlertProvider'
import { AuthProvider } from '@/context/AuthProvider'
import { FullScreenLoadingProvider } from '@/context/FullScreenLoadingProvider'
import ReduxProvider from '@/context/ReduxProvider'
import ThemeRegistry from '@/themes/ThemeRegistry'
import { ReactNode, Suspense } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ReduxProvider>
          <ThemeRegistry>
            <FullScreenLoadingProvider>
              <AlertProvider>
                <AuthProvider>
                  <Suspense
                    fallback={<FullScreenLoading mensaje={'Cargando...'} />}
                  >
                    {children}
                  </Suspense>
                </AuthProvider>
              </AlertProvider>
            </FullScreenLoadingProvider>
          </ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  )
}
