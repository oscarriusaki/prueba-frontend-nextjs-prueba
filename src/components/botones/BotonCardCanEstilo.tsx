import { alpha, Theme } from '@mui/material'
import React from 'react'

export const boxShadowCustom = (
  theme: Theme,
  value?: number
): React.CSSProperties => ({
  boxShadow: `0 2px 7px ${theme.palette.mode === 'dark'}`
    ? alpha('#000000', value ? value : 0 + 0.5)
    : alpha('#000000', value ? value : 0 + 0.1),
})
