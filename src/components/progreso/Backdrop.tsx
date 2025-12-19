import { Backdrop, Box, CircularProgress, Typography } from '@mui/material'

const SpinnerStyles = `
  div.spinner div {
    width: 6%;
    height: 16%;
    background: #f0f0f0;
    position: absolute;
    left: 49%;
    top: 43%;
    opacity: 0;
    border-radius: 50px;
    animation: fade 1s linear infinite;
  }

  @keyframes fade {
    from { opacity: 1; }
    to { opacity: 0.25; }
  }

  div.spinner div.bar1 { transform: rotate(0deg) translate(0, -130%); animation-delay: 0s; }
  div.spinner div.bar2 { transform: rotate(30deg) translate(0, -130%); animation-delay: -0.9167s; }
  div.spinner div.bar3 { transform: rotate(60deg) translate(0, -130%); animation-delay: -0.833s; }
  div.spinner div.bar4 { transform: rotate(90deg) translate(0, -130%); animation-delay: -0.7497s; }
  div.spinner div.bar5 { transform: rotate(120deg) translate(0, -130%); animation-delay: -0.667s; }
  div.spinner div.bar6 { transform: rotate(150deg) translate(0, -130%); animation-delay: -0.5837s; }
  div.spinner div.bar7 { transform: rotate(180deg) translate(0, -130%); animation-delay: -0.5s; }
  div.spinner div.bar8 { transform: rotate(210deg) translate(0, -130%); animation-delay: -0.4167s; }
  div.spinner div.bar9 { transform: rotate(240deg) translate(0, -130%); animation-delay: -0.333s; }
  div.spinner div.bar10 { transform: rotate(270deg) translate(0, -130%); animation-delay: -0.2497s; }
  div.spinner div.bar11 { transform: rotate(300deg) translate(0, -130%); animation-delay: -0.167s; }
  div.spinner div.bar12 { transform: rotate(330deg) translate(0, -130%); animation-delay: -0.0833s; }
`

interface BackdropParams {
  barsRotateFade?: boolean
  cargando: boolean
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  titulo: string
  size?: number
  zIndex?: number
}

export const BackdropVista = ({
  cargando,
  color,
  titulo,
  size,
  zIndex,
  barsRotateFade = true,
}: BackdropParams) => {
  const renderBarsRotateFade = () => (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      {titulo && (
        <Typography
          variant="body1"
          color={'#f0f0f0'}
          fontWeight={500}
          textAlign={'center'}
        >
          {titulo}
        </Typography>
      )}
      <div
        className="spinner"
        style={{
          position: 'relative',
          width: size || '54px',
          height: size || '54px',
          display: 'inline-block',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className={`bar${index + 1}`} />
        ))}
      </div>
      <style>{SpinnerStyles}</style>
    </Box>
  )

  const renderCircularProgress = () => (
    <Box>
      <Box textAlign={'center'}>
        <CircularProgress size={size} color={color} />
      </Box>
      <Typography>{titulo}</Typography>
    </Box>
  )

  return (
    <Backdrop
      sx={{
        zIndex: zIndex ? zIndex : (theme) => theme.zIndex.drawer + 1,
        bgcolor: 'rgba(0, 0, 0, 0.7)',
      }}
      open={cargando}
    >
      {barsRotateFade ? renderBarsRotateFade() : renderCircularProgress()}
    </Backdrop>
  )
}
