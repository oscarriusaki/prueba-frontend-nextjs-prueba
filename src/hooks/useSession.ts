import { useFullScreenLoading } from '@/context/FullScreenLoadingProvider'
import {
  estadosSinPermiso,
  peticionFormatoMetodo,
  Servicios,
} from '../services/Servicios'
import { eliminarCookie, guardarCookie, leerCookie } from '@/utils'
import { verificarToken } from '@/utils/token'
import { delay } from '@/utils/utilidades'
import { Constantes } from '@/config/Constantes'
import { imprimir } from '@/utils/imprimir'

export const useSession = () => {
  const { mostrarFullScreen, ocultarFullScreen } = useFullScreenLoading()

  const sesionPeticion = async ({
    url,
    method = 'get',
    body,
    headers,
    params,
    responseType,
    withCredentials,
  }: peticionFormatoMetodo) => {
    try {
      if (!verificarToken(leerCookie('token') ?? '')) {
        await actualizarSesion()
      }

      const cabeceras = {
        accept: 'application/json',
        Authorization: `Bearer ${leerCookie('token') ?? ''}`,
        ...headers,
      }

      const response = await Servicios.peticionHTTP({
        url,
        method: method,
        headers: cabeceras,
        body,
        params,
        responseType,
        withCredentials,
      })
      return response.data
    } catch (error) {
      const e = error as import('axios').AxiosError
      if (e.code === 'ECONNABORTED') {
        throw new Error('La peticion esta tardando demasiado')
      }

      if (Servicios.isNetworkError(e)) {
        throw new Error('Error en la conexion')
      }

      if (estadosSinPermiso.includes(e.response?.status ?? 0)) {
        mostrarFullScreen()
        await cerrarSesion()
        ocultarFullScreen()
        return
      }

      throw e.response?.data || 'Ocurrio un error desconocido'
    }
  }

  const cerrarSesion = async () => {
    try {
      mostrarFullScreen()
      await delay(1000)
      const token = leerCookie('token')
      borrarCookiesSession()

      const respuesta = await Servicios.get({
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        url: `${Constantes.baseUrl}/logout`,
      })

      if (respuesta?.url) {
        window.location.href = respuesta?.url
      } else {
        window.location.reload()
      }
    } catch (error) {
      imprimir(`Error al cerar sesion: `, error)
      window.location.reload()
    } finally {
      ocultarFullScreen()
    }
  }

  const borrarCookiesSession = () => {
    eliminarCookie('token')
    eliminarCookie('jid')
  }

  const actualizarSesion = async () => {
    try {
      const respuesta = await Servicios.post({
        url: `${Constantes.baseUrl}/token`,
        body: {
          token: leerCookie('token'),
        },
      })

      guardarCookie('token', respuesta.datos?.access_token)
      await delay(500)
    } catch (error) {
      imprimir(error)
      await cerrarSesion()
    }
  }
  return { sesionPeticion, cerrarSesion, borrarCookiesSession }
}
