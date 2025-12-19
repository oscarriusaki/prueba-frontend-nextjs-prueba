import { alpha, Box, Grid, Theme } from '@mui/material'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { IconoSvg } from '@/components/icons/IconoSvg'
import { PortalFlujoType } from '../../utils/DatosPaginaInicio'
import { useDebouncedCallback } from 'use-debounce'
import { motion } from 'motion/react'
import { TextoResponsive } from '@/components/etiquetaContenido/TextoResponsive'

type Props = {
  theme: Theme
  bgPrimary: string
  xs: boolean
  data: PortalFlujoType[]
}

export const PortalFlujo = ({ data, bgPrimary, xs, theme }: Props) => {
  const svgRef = useRef<SVGSVGElement>(null)

  const dibujarLinea = () => {
    const svg = svgRef.current
    if (!svg) return
    svg.innerHTML = ''

    const svgWidth = svg.clientWidth

    data.forEach((_, index) => {
      if (index < data.length - 1) {
        const box1 = document.getElementById(`boxCirculo-${index}`)
        const box2 = document.getElementById(`boxCirculo-${index + 1}`)

        if (box1 && box2) {
          const box1Rect = box1.getBoundingClientRect()
          const box2Rect = box2.getBoundingClientRect()
          const svgRect = svg.getBoundingClientRect()

          const x1 = box1Rect.left + box1Rect.width / 2 - svgRect.left
          const y1 = box1Rect.top + box1Rect.height / 2 - svgRect.top
          const x2 = box2Rect.left + box2Rect.width / 2 - svgRect.left
          const y2 = box2Rect.top + box2Rect.height / 2 - svgRect.top

          let controlPointX1, controlPointY1, controlPointX2, controlPointY2

          const offsetX = svgWidth * 0.3
          const offsetY = 500

          if (index % 2 === 0) {
            controlPointX1 = x1 + (x2 - x1) / 2 - offsetX
            controlPointY1 = y1 + offsetY
            controlPointX2 = x1 + (2 * (x2 - x1)) / 3 + offsetX * 0.4
            controlPointY2 = y2 - offsetY * 0.9
          } else {
            controlPointX1 = x1 + (x2 - x1) / 2 + offsetX
            controlPointY1 = y1 + offsetY
            controlPointX2 = x1 + (2 * (x2 - x1)) / 3 - offsetX * 0.2
            controlPointY2 = y2 - offsetY
          }

          const path = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
          )
          const d = `M${x1},${y1} C${controlPointX1},${controlPointY1} ${controlPointX2},${controlPointY2} ${x2},${y2}`
          path.setAttribute('d', d)
          path.setAttribute('stroke', alpha(bgPrimary, 0.4))
          path.setAttribute('stroke-width', '2')
          path.setAttribute('stroke-dasharray', '10,10')
          path.setAttribute('fill', 'none')
          svg.appendChild(path)
        }
      }
    })
  }

  const debouncedDibujarLinea = useDebouncedCallback(dibujarLinea, 500)

  useEffect(() => {
    debouncedDibujarLinea()
    window.addEventListener('resize', debouncedDibujarLinea)
    return () => window.removeEventListener('resize', debouncedDibujarLinea)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <Box
      sx={{
        width: '100%',
        py: '50px',
        background: theme.palette.background.paper,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        borderBottom: `1px solid ${theme.palette.divider}`,
        overflow: 'hidden',
      }}
    >
      <Grid
        container
        sx={{
          py: { xs: 1 },
          px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
          maxWidth: '1500px',
          position: 'relative',
        }}
      >
        {data.map((dato, index) => (
          <Grid
            key={`card-flujo-${index}`}
            mb={
              index < data.length - 1
                ? { xs: '0px', sm: '30px', md: '50px' }
                : 0
            }
            sx={{ py: { xs: 1, sm: 2, md: 4 } }}
            zIndex={1}
            container
          >
            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
              px={{ xs: 0, sm: 1 }}
              py={2}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                order: { xs: 1, sm: index % 2 === 0 ? 1 : 2 },
              }}
            >
              <Box>
                <Box sx={{ display: 'flex', p: 2, px: { xs: 0, sm: 2 } }}>
                  <Box id={`boxCirculo-${index}`} mr={1}>
                    <IconoSvg
                      p={2}
                      borderRadius={'50%'}
                      tipo={'caraLondra'}
                      size={xs ? '20' : '25px'}
                      color={'#fff'}
                      colorFondo={bgPrimary}
                    />
                  </Box>

                  <Box>
                    <TextoResponsive
                      texto={dato.encabezado.titulo}
                      tipo={'titulo4'}
                    />

                    <TextoResponsive
                      texto={dato.encabezado.texto}
                      color={'text.secondary'}
                      tipo={'titulo5'}
                    />
                  </Box>
                </Box>
                <Box p={2} px={{ xs: 0, sm: 2 }}>
                  <Box display={'flex'}>
                    <TextoResponsive
                      texto={`lorem lorem`}
                      color={bgPrimary}
                      tipo={'titulo3'}
                      sx={{ mr: 1 }}
                    />
                    <TextoResponsive
                      texto={`lorem lorem`}
                      tipo={'titulo3'}
                      sx={{ textAlign: 'justify' }}
                    />
                  </Box>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <TextoResponsive
                      texto={`lorem lorem`}
                      tipo={'titulo4'}
                      color={'text.secondary'}
                      sx={{ mt: 1 }}
                    />
                  </motion.div>
                </Box>
              </Box>
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 6,
              }}
              px={1}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                order: { xs: 2, sm: index % 2 === 0 ? 2 : 1 },
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  height: '100%',
                  minHeight: { xs: '300px', sm: '200px' },
                  maxHeight: '700px',
                  maxWidth: '400px',
                  borderRadius: '20px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* {dato.imagenSrc && (
                  <Image
                    src={dato.imagenSrc}
                    alt={'Inicio'}
                    fill
                    priority
                    quality={100}
                    style={{ objectFit: 'contain' }}
                  />
                )}

                {dato.iconoSvg && ( */}
                <IconoSvg tipo={'caraLondra'} color={bgPrimary} size={'100%'} />
                {/* )} */}
              </Box>
            </Grid>
          </Grid>
        ))}

        {!xs && (
          <svg
            ref={svgRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          />
        )}
      </Grid>
      <Box sx={{ position: 'absolute', right: -300, top: 150 }}>
        <IconoSvg
          tipo={'figuraV2'}
          size={'350px'}
          color={alpha(bgPrimary, 0.15)}
        />
      </Box>

      <Box sx={{ position: 'absolute', left: -300, top: 600 }}>
        <IconoSvg
          tipo={'figuraV2'}
          size={'350px'}
          rotacion={180}
          color={alpha(bgPrimary, 0.15)}
        />
      </Box>
    </Box>
  )
}
