import {
  Grid,
  Button,
  CardMedia,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Footer = () => {
  const theme = useTheme()
  const router = useRouter()
  const xs = useMediaQuery(theme.breakpoints.only('xs'))

  const terminosYCondiciones = () => {
    router.push('/tyc')
  }

  return (
    <>
      <Grid
        size={{
          xl: 12,
        }}
        sx={{
          backgroundColor: '#000000ff',
          backdropFilter: 'blur(12px)',
        }}
        // justifyContent="space-evenly"
        direction={'row'}
        padding={'3%'}
      >
        <Grid
          container
          sx={{ minWidth: '340px' }}
          display={'flex'}
          // justifyContent={'space-evenly'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={`${xs ? 'column' : 'row'}`}
        >
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '10px',
            }}
            size={{ xl: 3, xs: 3 }}
          >
            <Button onClick={() => {}}>
              <CardMedia component="div">
                <Image
                  src={'../../social-media-icons/facebookLight.svg'}
                  alt="Custom Icon"
                  width={50}
                  height={50}
                />
              </CardMedia>
            </Button>
            <Button onClick={() => {}}>
              <CardMedia component="div">
                <Image
                  src={'../../social-media-icons/instagramLight.svg'}
                  alt="Custom Icon"
                  width={50}
                  height={50}
                />
              </CardMedia>
            </Button>
            <Button onClick={() => {}}>
              <CardMedia component="div">
                <Image
                  src={'../../social-media-icons/twitterLight.svg'}
                  alt="Custom Icon"
                  width={50}
                  height={50}
                />
              </CardMedia>
            </Button>
            <Button onClick={() => {}}>
              <CardMedia component="div">
                <Image
                  src={'../../social-media-icons/youtubeLight.svg'}
                  alt="Custom Icon"
                  width={50}
                  height={50}
                />
              </CardMedia>
            </Button>
          </Grid>
          <br />
          <Grid
            size={{ xl: 3, xs: 12 }}
            sx={{ display: 'flex', justifyContent: 'space-evenly' }}
            pb={2}
          >
            <Button sx={{ m: 'auto' }} onClick={terminosYCondiciones}>
              <Typography color={'white'}>
                2025 Maquinet. Todos los derechos reservados.
              </Typography>
            </Button>
          </Grid>
          <Grid
            size={{ xl: 3, xs: 12 }}
            sx={{ display: 'flex', justifyContent: 'space-evenly' }}
            pb={2}
          >
            <Button sx={{ m: 'auto' }} onClick={terminosYCondiciones}>
              <Typography color={'white'} sx={{ textDecoration: 'underline' }}>
                Terminos y condiciones
              </Typography>
            </Button>
          </Grid>
          <Grid
            size={{ xl: 3, xs: 3 }}
            sx={{ display: 'flex', justifyContent: 'space-evenly' }}
            pb={2}
          >
            <Image
              src="/images/img5.png"
              alt="Custom Icon"
              // fill
              width={200}
              height={50}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer
