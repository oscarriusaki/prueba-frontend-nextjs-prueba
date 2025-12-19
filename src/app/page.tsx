'use client'
import { Box, Toolbar } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter()

  const verProducto = () => {
    router.push('/productos')
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box component={'main'} sx={{ flexGrow: 1, width: '100%' }}>
        <Toolbar />
        <Toolbar />
      </Box>
    </Box>
  )
}
