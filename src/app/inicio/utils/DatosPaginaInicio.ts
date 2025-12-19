import { TipoIconoSvgType } from '@/components/icons/IconoSvg'
import { nombreColorProps } from '@/themes/custom-colors'

export type PortalPrincipalType = {
  titulo: string
  descripcion: string
  labelBoton: string
  iconoBoton: string
  ruta: string
  imagenSrc?: string
  imagenSvc?: string
}

export type PortalCardsType = {
  titulo: string
  texto: string
  iconoSvg?: TipoIconoSvgType
  icono?: string
  labelBoton?: string
  color?: nombreColorProps
  accion?: string
}

export type PortalInformacionType = {
  titulo: string
  texto: string
  cards: PortalCardsType[]
}

export type PortalFlujoType = {
  encabezado: {
    titulo: string
    texto: string
    color: nombreColorProps | 'primary'
  }
}

type RedesSocialesType = {
  iconoSvg?: TipoIconoSvgType
  icono?: string
  texto?: string
  ruta?: string
  ocultar?: boolean
}

export type PortalContactosType = {
  info: {
    iconoSvg: TipoIconoSvgType
    titulo: string
    gmail: string
    redesSociales: RedesSocialesType[]
  }
  detalle: {
    titulo: string
    item: RedesSocialesType[]
  }[]
}

export type PortalPiePaginaType = {
  titulo: string
  ruta?: string
  imagenSrc: string
}

export type PortalInicioType = {
  principal: PortalPrincipalType
  cards: PortalCardsType[]
  info: PortalInformacionType
  flujo: PortalFlujoType[]
  contacto: PortalContactosType
  piePagina: PortalPiePaginaType[]
}

export const datosContactos: PortalContactosType = {
  info: {
    titulo: 'Nuestras redes sociales',
    iconoSvg: 'logoLondraAgetic',
    gmail: '@agetic',
    redesSociales: [
      {
        iconoSvg: 'youtube',
        texto: 'YouTube',
        ruta: 'https://www.youtube.com/c/AgeticBolivia',
      },
      {
        iconoSvg: 'facebook',
        texto: 'Facebook',
        ruta: 'https://www.facebook.com/AgeticBoliviaOficial',
      },
      {
        iconoSvg: 'instagram',
        texto: 'Instagram',
        ruta: 'https://www.instagram.com/agetic_bolivia/',
      },
      {
        iconoSvg: 'twitter',
        texto: 'Twitter',
        ruta: 'https://www.x.com/AgeticBolivia',
      },
      {
        iconoSvg: 'correo',
        texto: ' Correo',
        ruta: 'mailto:comunicación@agetic.gob.bo',
      },
    ],
  },
  detalle: [
    {
      titulo: 'Dirección',
      item: [
        {
          icono: 'location_on_sharp',
          texto: `Sopocachi, C. Pedro Salazar 
                  N° 631, esq. Andrés Muñoz
                  Edificio FNDR`,
        },
      ],
    },
    {
      titulo: 'Contáctanos',
      item: [
        {
          iconoSvg: 'whatsapp',
          texto: '+591 63124081',
        },
        {
          icono: 'mail_outline_sharp',
          texto: 'soporte@agetic.gob.bo',
        },
        {
          icono: 'local_phone_sharp',
          texto: '2-2184016',
        },
      ],
    },
    {
      titulo: 'Nosotros',
      item: [
        {
          icono: 'rss_feed_sharp',
          texto: 'Página AGETIC',
          ruta: 'https://www.agetic.gob.bo/',
        },
        {
          icono: 'language_sharp',
          texto: 'Portal Ciudadanía Digital',
          ruta: 'https://ciudadania.demo.gtic.gob.bo/ciudadania',
        },
      ],
    },
  ],
}
