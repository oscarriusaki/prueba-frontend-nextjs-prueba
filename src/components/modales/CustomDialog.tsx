import {
  Box,
  Breakpoint,
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  PaperProps,
  PortalProps,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { BaseSyntheticEvent, FC, PropsWithChildren } from 'react'
import { Icono } from '@/components/Icono'
import { TransitionSlide, TransitionZoom } from './Animations'

interface Props {
  isOpen: boolean
  handleClose: () => void
  title?: string
  fullScreen?: boolean
  maxWidth?: Breakpoint | undefined
  paperProps?: Partial<PaperProps>
  disableBackdropClick?: boolean
  disableEscapeKeyDown?: boolean
  scroll?: 'body' | 'paper'
  noTitle?: boolean
  disablePortal?: PortalProps['disablePortal']
  disableScrollLock?: boolean
}

export const CustomDialog: FC<PropsWithChildren<Props>> = ({
  isOpen,
  handleClose,
  title,
  children,
  fullScreen = false,
  maxWidth,
  paperProps,
  disableBackdropClick = false,
  disableEscapeKeyDown = false,
  scroll = 'body',
  noTitle = false,
  disablePortal,
  disableScrollLock,
}) => {
  const theme = useTheme()
  let dsm = useMediaQuery(theme.breakpoints.down('sm'))

  const cerrarDialog = (event: BaseSyntheticEvent, reason: string) => {
    if (disableBackdropClick && reason === 'backdropClick') {
      return false
    }
    if (disableEscapeKeyDown && reason === 'escapeKeyDown') {
      return false
    }
    handleClose()
  }
  return (
    <Dialog
      //   PaperProps={paperProps}
      // slotProps.paper
      slotProps={{
        paper: paperProps,
      }}
      fullScreen={fullScreen || dsm}
      fullWidth={true}
      maxWidth={maxWidth}
      open={isOpen}
      //   TransitionComponent={dsm ? TransitionSlide : TransitionZoom}
      // slots.transition
      slots={{
        transition: dsm ? TransitionSlide : TransitionZoom,
      }}
      onClose={cerrarDialog}
      scroll={scroll}
      disablePortal={disablePortal}
      disableScrollLock={disableScrollLock}
    >
      {noTitle ? (
        <Box />
      ) : (
        <DialogTitle
          sx={{
            backgroundColor: '#000000ff',
            backdropFilter: 'blur(6px)',
          }}
        >
          <Grid
            container
            sx={{ display: 'flex', justifyContent: 'center' }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            display={'flex'}
            flexDirection={'row'}
          >
            <Grid size={{ xl: 11 }}>
              {title ? (
                <Typography
                  sx={{
                    fontWeight: '700',
                    fontSize: 28,
                    color: '#fffb00ff',
                    paddingX: '30px',
                    textAlign: 'center',
                  }}
                >
                  {title}
                </Typography>
              ) : (
                <Box />
              )}
            </Grid>
            <Grid size={{ xl: 1 }}>
              <IconButton onClick={handleClose} color={'inherit'}>
                <Icono sx={{ color: 'white' }}>close</Icono>
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
      )}
      {children}
    </Dialog>
  )
}
