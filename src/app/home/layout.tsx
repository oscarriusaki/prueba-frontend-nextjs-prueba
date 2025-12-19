import { FullScreenLoading } from '@/components/FullScreenLoading'
import { SideBarProvider } from '@/context/SideBarProvider'
import { siteName } from '@/utils'
import { Box, Toolbar } from '@mui/material'
import { ReactNode, Suspense } from 'react'

export default function Page({ children }: { children: ReactNode }) {
  return (
    // <Box sx={{ display: 'flex' }}>
    //   <Box component={'main'} sx={{ flexGrow: 1, p: 2 }}>
    //     <SideBarProvider>{children}</SideBarProvider>
    //   </Box>
    // </Box>
    <>
      <title>{`${siteName()}`}</title>
      <Box sx={{ display: 'flex' }}>
        {/* <NavbarLogin /> */}
        <Box
          component={'main'}
          sx={{
            flexGrow: 1,
            p: 2,
          }}
        >
          <Toolbar />
          <Suspense fallback={<FullScreenLoading mensaje={'Cargando...'} />}>
            {children}
          </Suspense>
        </Box>
      </Box>
    </>
  )
}
