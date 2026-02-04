import { Box, Button, Collapse, Theme, Typography } from '@mui/material'
import { PortalContactosType } from '../../utils/DatosPaginaInicio'
import {
  IconoSvg,
  optionsTipoIconoSvg,
  TipoIconoSvgType,
} from '@/components/icons/IconoSvg'
import { Icono } from '@/components/Icono'
import { useFieldArray, useForm } from 'react-hook-form'
import { IconoTooltip } from '@/components/botones/IconoTooltip'
import { forwardRef, Ref, useImperativeHandle, useState } from 'react'
import { delay } from '@/utils'
import ProgresoLineal from '@/components/progreso/ProgresoLineal'
import { boxShadowCustom } from '@/components/botones/BotonCardCanEstilo'
import { FormInputText } from '@/components/form/FormInputText'
import { FormInputAutocomplete } from '@/components/form/FormInputAutoComplete'
import { optionType } from '@/components/form/FormInputDropDown'
// import { MenuCustom } from '@/components/menu/MenuCustom'
import { optionMenuContactos } from '../../types/InicioType'
import { iconosOptions } from '@/components/icons/IconosOptions'

type PropsIcons = {
  icono?: string | null
  theme: Theme
}
const RenderEtiquetaRedSocial = ({ icono, theme }: PropsIcons) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderBottom: `1px solid ${theme.palette.divider}`,
        py: { xs: 5, sm: 5, md: 10 },
      }}
    >
      <Box
        sx={{
          bgcolor: theme.palette.background.paper,
          borderRadius: '50%',
          boxShadow: boxShadowCustom(theme, 0.4),
          p: 0.5,
        }}
      >
        {icono && (
          <IconoSvg
            p={0}
            tipo={icono as TipoIconoSvgType}
            size={'25px'}
            color={theme.palette.text.primary}
          />
        )}
      </Box>
    </Box>
  )
}

type Props = {
  esEdicion?: boolean
  loading?: boolean
  // data: PortalContactosType
  xs: boolean
  bgPrimary: string
  theme: Theme
  esTabEntidad?: boolean
  // urlLogo?: string
  setEdicion?: (value: boolean) => void
  accionGuardar?: (data: PortalContactosType) => Promise<void>
}

export type FormPortalContactosRef = {
  accionCancelarEdicion: () => Promise<boolean>
}

export const PortalContactoForm = (
  props: Props,
  ref: Ref<FormPortalContactosRef>
) => {
  const {
    // data,
    xs,
    bgPrimary,
    theme,
    esEdicion,
    loading,
    esTabEntidad,
    setEdicion,
    accionGuardar,
  } = props

  const isDarkMode = theme.palette.mode === 'dark'

  const [expandir, setExpandir] = useState(false)
  const { control, handleSubmit, reset } = useForm<PortalContactosType>({
    // defaultValues: data,
    mode: 'onChange',
  })

  const refHandler: () => FormPortalContactosRef = () => ({
    accionCancelarEdicion,
  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useImperativeHandle(ref, refHandler, [])

  const accionCancelarEdicion = async () => {
    // reset(data)
    await delay(50)
    return true
  }

  // useEffect(() => {
  //   reset(data)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data])

  const {
    fields: socialFields,
    append: appendSocial,
    remove: removeSocial,
  } = useFieldArray({
    control,
    name: 'info.redesSociales',
  })

  const {
    fields: detalleFields,
    append: detalleAppend,
    remove: detalleRemove,
    update: detalleUpdate,
  } = useFieldArray({
    control,
    name: 'detalle',
  })

  const onSubmit = async (data: PortalContactosType) => {
    if (accionGuardar) await accionGuardar(data)
  }

  const rulesGeneral = (isRequired?: boolean) => ({
    required: isRequired ? 'Este campo es obligatorio' : undefined,
    minLength: {
      value: 3,
      message: 'Mínimo 3 caracteres',
    },
    maxLength: {
      value: 130,
      message: 'Máximo 130 caracteres',
    },
  })

  const eliminarRedSocial = (rowIndex: number) => {
    removeSocial(rowIndex)
  }

  const adicionarRedSocial = () => {
    setExpandir(true)
    appendSocial({
      iconoSvg: undefined,
      icono: '',
      texto: '',
      ruta: '',
      ocultar: false,
    })
  }

  const adicionarDetalle = () => {
    detalleAppend({
      titulo: '',
      item: [
        {
          icono: '',
          texto: '',
          ruta: '',
          ocultar: false,
        },
      ],
    })
  }

  const agregarItemADetalle = (detalleIndex: number) => {
    const nuevoItem = {
      icono: '',
      texto: '',
      ruta: '',
      ocultar: false,
    }

    detalleUpdate(detalleIndex, {
      ...detalleFields[detalleIndex],
      item: [...detalleFields[detalleIndex].item, nuevoItem],
    })
  }

  const eliminarItemDeDetalle = (detalleIndex: number, itemIndex: number) => {
    const updatedItems = detalleFields[detalleIndex].item.filter(
      (_, index) => index !== itemIndex
    )
    detalleUpdate(detalleIndex, {
      ...detalleFields[detalleIndex],
      item: updatedItems,
    })
  }

  const eliminarDetalle = (rowIndex: number) => {
    detalleRemove(rowIndex)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            p: esTabEntidad ? 1 : 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            pt: 0,
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              position: 'relative',
              borderBottom: !esTabEntidad
                ? `1px solid ${theme.palette.divider}`
                : undefined,
              py: { xs: 5, sm: 5, md: 10 },
              ...(esTabEntidad && {
                border: `solid ${theme.palette.divider} 1px`,
                bgcolor: theme.palette.background.paper,
                borderRadius: 3,
              }),
            }}
          >
            {/* {esEdicion && ( */}
            <Box
              key={`detalle-contacto`}
              sx={{
                top: 0,
                right: 0,
                mt: 2,
                mr: 2,
                gap: 1,
                position: 'absolute',
                borderRadius: '50%',
                boxShadow: boxShadowCustom(theme, 0.2),
              }}
            >
              <IconoTooltip
                variant={'contained'}
                accion={adicionarDetalle}
                titulo={'Adicionar detalle'}
                icono={'add'}
                name="btn-add-detalle"
                id="btn-add-red-social"
                color="primary"
              />
            </Box>
            {/* )} */}

            <Box
              sx={{
                py: 1,
                px: { xs: 1, sm: 2, md: 3 },
                maxWidth: '2000px',
                flexWrap: 'wrap',
                display: 'flex',
                width: '100%',
                alignItems: { xs: 'center', sm: 'start' },
                justifyContent: { xs: 'center', sm: 'space-evenly' },
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 2, sm: 1 },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  pb: 1,
                  borderBottom: xs ? `1px solid ${theme.palette.divider}` : {},
                  gap: 1,
                }}
              >
                {/* {props.urlLogo ? (
                  <Image
                    src={props.urlLogo}
                    alt={`LONDRA`}
                    height={80}
                    width={200}
                    quality={100}
                    style={{
                      objectFit: 'contain',
                      filter: isDarkMode ? 'invert(1)' : 'none',
                    }}
                  />
                ) : (
                  <IconoSvg
                    tipo={data.info.iconoSvg}
                    size={'40px'}
                    color={bgPrimary}
                    p={0}
                  />
                )} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur eligendi facilis earum, aliquam laborum amet. Error
                itaque dolore in id qui aliquid dolor ex, repellendus illo
                minima ipsam maxime exercitationem?
                {/* {!esEdicion && (
                  <TextoResponsive texto={data.info.titulo} tipo={'titulo4'} />
                )} */}
                {esEdicion && (
                  <FormInputText
                    id={'info.titulo'}
                    control={control}
                    name="info.titulo"
                    label="Titulo Principal"
                    // placeholder="Nuestras redes sociales"
                    disabled={loading}
                    rules={rulesGeneral(true)}
                  />
                )}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: esEdicion ? 'column' : 'row',
                  }}
                  gap={1}
                >
                  {/* {!esEdicion &&
                    data.info.redesSociales.map((dato, index) => (
                      <Box key={`redes-info-${index}`}>
                        <TooltipCustom title={dato.texto}>
                          <Link
                            href={dato.ruta}
                            target="_blank"
                            style={{
                              textDecoration: 'none',
                              display: 'flex',
                            }}
                            rel="noopener noreferrer"
                          >
                            <Box
                              sx={{
                                bgcolor: theme.palette.background.paper,
                                boxShadow: boxShadowCustom(theme, 0.4),
                                borderRadius: '50%',
                                p: 0.5,
                              }}
                            >
                              <IconoSvg
                                p={0}
                                tipo={dato.iconoSvg}
                                size={'25px'}
                                color={theme.palette.text.primary}
                              />
                            </Box>
                          </Link>
                        </TooltipCustom>
                      </Box>
                    ))} */}

                  {esEdicion && (
                    <Box>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                      >
                        <IconoTooltip
                          accion={() => {
                            setExpandir(!expandir)
                          }}
                          titulo={expandir ? 'Contraer' : 'Expandir '}
                          icono={
                            expandir
                              ? 'keyboard_arrow_up'
                              : 'keyboard_arrow_down'
                          }
                          name="btn-expandir-acciones"
                          id="btn-expandir-acciones"
                          color="inherit"
                        />

                        <Typography
                          color={'primary.main'}
                          fontWeight={450}
                          variant="body1"
                        >
                          Redes sociales
                        </Typography>
                        <IconoTooltip
                          accion={adicionarRedSocial}
                          titulo={'Adicionar red social'}
                          icono={'add'}
                          name="btn-add-red-social"
                          id="btn-add-red-social"
                          color="primary"
                        />
                      </Box>
                      <Collapse in={expandir}>
                        {socialFields.map((data, rowIndex: number) => {
                          return (
                            <Box
                              key={`redes sociales-${rowIndex}-${data.id}`}
                              sx={{
                                p: 1,
                                mb: 1,
                                borderRadius: 2,
                                maxWidth: '280px',
                                boxShadow: boxShadowCustom(theme, 0.1),
                                border: `solid ${theme.palette.divider} 1px`,
                              }}
                            >
                              <Box sx={{ display: 'flex', gap: 1 }}>
                                <Box width={'200px'}>
                                  <FormInputAutocomplete
                                    id={`info.redesSociales.${rowIndex}.iconoSvg`}
                                    name={`info.redesSociales.${rowIndex}.iconoSvg`}
                                    control={control}
                                    label="Icono"
                                    disabled={loading}
                                    options={optionsTipoIconoSvg}
                                    getOptionLabel={(option: optionType) =>
                                      option.label
                                    }
                                    isOptionEqualToValue={(
                                      option: optionType,
                                      value: optionType
                                    ) => {
                                      return option.value === value.value
                                    }}
                                    renderOption={(option: optionType) => (
                                      <RenderEtiquetaRedSocial
                                        icono={option.label}
                                        theme={theme}
                                      />
                                    )}
                                    // getOptionDisabled={(option: optionType) =>
                                    //   Boolean(option.disabled)
                                    // }
                                    // soloValue
                                    freeSolo
                                  />
                                </Box>

                                <FormInputText
                                  id={`info.redesSociales.${rowIndex}.texto`}
                                  name={`info.redesSociales.${rowIndex}.texto`}
                                  placeholder="Facebook"
                                  rules={rulesGeneral()}
                                  disabled={loading}
                                  control={control}
                                  label="Texto"
                                />
                              </Box>
                              <Box
                                sx={{
                                  gap: 1,
                                  display: 'flex',
                                  alignItems: 'center',
                                }}
                              >
                                <FormInputText
                                  id={`info.redesSociales.${rowIndex}.ruta`}
                                  name={`info.redesSociales.${rowIndex}.ruta`}
                                  placeholder="https://www.facebook.com"
                                  rules={rulesGeneral()}
                                  disabled={loading}
                                  control={control}
                                  label="Ruta url"
                                />

                                <IconoTooltip
                                  id={`eliminar-red-social-${rowIndex}`}
                                  name={`eliminar-red-social-${rowIndex}`}
                                  titulo={'Eliminar red social'}
                                  color={'secondary'}
                                  sx={{
                                    color: loading
                                      ? theme.palette.divider
                                      : theme.palette.error.main,
                                  }}
                                  desactivado={loading}
                                  fontSize={'small'}
                                  icono={'delete'}
                                  padingIconButon="3px"
                                  accion={() => {
                                    eliminarRedSocial(rowIndex)
                                  }}
                                />
                              </Box>
                            </Box>
                          )
                        })}
                      </Collapse>
                    </Box>
                  )}
                </Box>
                {/* {!esEdicion && (
                  <TextoResponsive
                    p={0}
                    texto={data.info.gmail}
                    color={'text.secondary'}
                    tipo={'titulo4'}
                  />
                )} */}
                {esEdicion && (
                  <FormInputText
                    id={'info.gmail'}
                    control={control}
                    name="info.gmail"
                    label="gmail"
                    placeholder="@agetic"
                    disabled={loading}
                    rules={rulesGeneral()}
                  />
                )}
              </Box>

              {/* {!esEdicion && (
                <>
                  {data.detalle.map((dato, index) => (
                    <Box
                      key={`detalle-contacto-${index}`}
                      sx={{
                        maxWidth: '270px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                      }}
                    >
                      <TextoResponsive texto={dato.titulo} tipo={'titulo4'} />
                      {dato.item.map((item, index) => (
                        <Box key={`item-${dato.titulo}-${index}`}>
                          {item.texto && (
                            <Link
                              href={item.ruta}
                              target="_blank"
                              style={{
                                textDecoration: 'none',
                                display: 'flex',
                              }}
                              rel="noopener noreferrer"
                            >
                              <Box sx={{ display: 'flex', gap: 1 }}>
                                {item.icono ? (
                                  <Icono sx={{ color: 'text.secondary' }}>
                                    {item.icono}
                                  </Icono>
                                ) : (
                                  item.iconoSvg && (
                                    <IconoSvg
                                      p={0}
                                      tipo={'whatsapp'}
                                      color={'text.secondary'}
                                      size={'22px'}
                                    />
                                  )
                                )}
                                <TextoResponsive
                                  texto={item.texto}
                                  tipo={'titulo5'}
                                  color={'text.secondary'}
                                />
                              </Box>
                            </Link>
                          )}
                        </Box>
                      ))}
                      {xs && (
                        <Box width={'100%'}>
                          <Divider />
                        </Box>
                      )}
                    </Box>
                  ))}
                </>
              )} */}

              {esEdicion && (
                <>
                  {detalleFields.map((data, rowIndex) => (
                    <Box
                      key={`detalle-${rowIndex}-${data.id}`}
                      sx={{
                        maxWidth: '270px',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 3,
                        // border: `solid ${theme.palette.divider} 1px`,
                        boxShadow: boxShadowCustom(theme, 0.05),
                        gap: 1,
                        p: 1,
                      }}
                    >
                      <Box
                        sx={{
                          gap: 1,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <FormInputText
                          id={`detalle.${rowIndex}.titulo`}
                          name={`detalle.${rowIndex}.titulo`}
                          placeholder="Nosotros"
                          rules={rulesGeneral(true)}
                          disabled={loading}
                          control={control}
                          label="Titulo"
                        />
                        <Box mr={-1}>
                          {/* <MenuCustom
                            id={`menu-${rowIndex}`}
                            loading={loading}
                            items={optionMenuContactos}
                            accionCorrecta={(tipoAccion: string) => {
                              if (tipoAccion === 'adicionar') {
                                agregarItemADetalle(rowIndex)
                              }

                              if (tipoAccion === 'eliminar') {
                                eliminarDetalle(rowIndex)
                              }
                            }}
                          /> */}
                        </Box>
                      </Box>

                      {data.item.map((item, itemIndex) => (
                        <Box
                          key={`item-${rowIndex}-${itemIndex}-${item.texto}`}
                          sx={{
                            display: 'flex',
                            gap: 0.5,
                            alignItems: 'center',
                            flexDirection: 'column',
                          }}
                        >
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <Box width={'150px'}>
                              <FormInputAutocomplete
                                id={`detalle.${rowIndex}.item.${itemIndex}.icono`}
                                name={`detalle.${rowIndex}.item.${itemIndex}.icono`}
                                control={control}
                                label="Icono"
                                disabled={loading}
                                options={iconosOptions}
                                getOptionLabel={(option: optionType) =>
                                  option.label
                                }
                                isOptionEqualToValue={(
                                  option: optionType,
                                  value: optionType
                                ) => {
                                  return option.value === value.value
                                }}
                                renderOption={(option: optionType) => (
                                  <Box
                                    sx={{
                                      width: '100%',
                                      display: 'flex',
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <Box>
                                      <Icono>{option.label}</Icono>
                                    </Box>
                                  </Box>
                                )}
                                // soloValue
                                freeSolo
                              />
                            </Box>
                            <FormInputText
                              id={`detalle.${rowIndex}.item.${itemIndex}.texto`}
                              name={`detalle.${rowIndex}.item.${itemIndex}.texto`}
                              placeholder="Texto"
                              rules={rulesGeneral()}
                              disabled={loading}
                              control={control}
                              label="Texto"
                            />
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              gap: 1,
                              alignItems: 'center',
                            }}
                          >
                            <FormInputText
                              id={`detalle.${rowIndex}.item.${itemIndex}.ruta`}
                              name={`detalle.${rowIndex}.item.${itemIndex}.ruta`}
                              placeholder="https://www.agetic.gob.bo"
                              rules={rulesGeneral()}
                              disabled={loading}
                              control={control}
                              label="Ruta"
                            />

                            <IconoTooltip
                              id={`eliminar-item-detalle-${rowIndex}`}
                              name={`eliminar-item-detelle-${rowIndex}`}
                              titulo={'Eliminar item'}
                              color={'secondary'}
                              sx={{
                                color: loading
                                  ? theme.palette.divider
                                  : theme.palette.error.main,
                              }}
                              desactivado={loading}
                              fontSize={'small'}
                              icono={'delete'}
                              padingIconButon="0px"
                              accion={() => {
                                eliminarItemDeDetalle(rowIndex, itemIndex)
                              }}
                            />
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  ))}
                </>
              )}
            </Box>
          </Box>

          {esTabEntidad && (
            <>
              <ProgresoLineal mostrar={loading} />
              <Box ml={'auto'}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {esEdicion && (
                    <>
                      <Button
                        id={`id-accion-editar-cancelar`}
                        variant={'outlined'}
                        disabled={loading}
                        sx={{ mr: 1, my: 1 }}
                        size={'small'}
                        onClick={() => {
                          if (setEdicion) setEdicion(false)
                        }}
                        startIcon={<Icono color="inherit">close</Icono>}
                      >
                        <Typography noWrap>CANCELAR</Typography>
                      </Button>
                      <Button
                        id={`id-accion-editar-guardar`}
                        variant={'contained'}
                        disabled={loading}
                        sx={{ mr: 1, my: 1 }}
                        size={'small'}
                        type="submit"
                        startIcon={<Icono color="inherit">save</Icono>}
                      >
                        <Typography noWrap>GUARDAR</Typography>
                      </Button>
                    </>
                  )}

                  {!esEdicion && (
                    <Button
                      id={`id-accion-editar`}
                      variant={'contained'}
                      disabled={loading}
                      sx={{ mr: 1, my: 1 }}
                      size={'small'}
                      onClick={() => {
                        if (setEdicion) setEdicion(true)
                      }}
                      startIcon={<Icono color="inherit">edit</Icono>}
                    >
                      <Typography noWrap>EDITAR</Typography>
                    </Button>
                  )}
                </Box>
              </Box>
            </>
          )}
        </Box>
      </form>
    </>
  )
}

export const PortalContacto = forwardRef(PortalContactoForm)
