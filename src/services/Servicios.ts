import axios, { Method, RawAxiosRequestHeaders, ResponseType } from 'axios'
import { Params } from 'next/dist/server/request/params'

export type peticionFormatoMetodo = {
  method?: Method
} & peticionFormato

export type peticionFormato = {
  url: string
  headers?: RawAxiosRequestHeaders
  body?: object
  params?: any
  responseType?: ResponseType
  withCredentials?: boolean
}

export const estadosCorrectos: number[] = [200, 201, 202, 204]
export const estadosSinPermiso: number[] = [401]

class ServiciosClass {
  peticionHTTP = ({
    url,
    method = 'get',
    headers,
    body,
    params,
    responseType,
    withCredentials = true,
  }: peticionFormatoMetodo) =>
    axios({
      method: method,
      url: url,
      headers: headers,
      timeout: 30000,
      data: body,
      params: params,
      responseType: responseType,
      withCredentials: withCredentials,
      validateStatus(status) {
        return estadosCorrectos.some((estado: number) => status === estado)
      },
    })
  isNetworkError(err: unknown): boolean {
    // return !!err.isAxiosError && !err.response
    return axios.isAxiosError(err) && !err.response
  }

  async peticion({
    url,
    method = 'get',
    headers,
    body,
    params,
    responseType,
    withCredentials = true,
  }: peticionFormatoMetodo) {
    try {
      const response = await this.peticionHTTP({
        url,
        method: method,
        headers,
        body,
        params,
        responseType,
        withCredentials,
      })
      return response.data
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        if (e.code === 'ECONNABORTED') {
          throw new Error('La peticion esta tardando demaciado')
        }

        if (this.isNetworkError(e)) {
          throw new Error(`Error en la conexion`)
        }

        throw e.response?.data || 'Ocurrio un error desconocido'
      }
      throw e instanceof Error ? e : new Error('Error desconocido')
    }
  }

  async get({
    url,
    body = {},
    headers = {},
    params,
    responseType,
    withCredentials,
  }: peticionFormato) {
    return await this.peticion({
      url,
      method: 'get',
      headers,
      body,
      params,
      responseType,
      withCredentials,
    })
  }

  async post({
    url,
    body,
    headers,
    params,
    responseType,
    withCredentials,
  }: peticionFormato) {
    return await this.peticion({
      url,
      method: 'post',
      headers,
      body,
      params,
      responseType,
      withCredentials,
    })
  }

  async put({
    url,
    body,
    headers,
    params,
    responseType,
    withCredentials,
  }: peticionFormato) {
    return await this.peticion({
      url,
      method: 'put',
      headers,
      body,
      params,
      responseType,
      withCredentials,
    })
  }

  async patch({
    url,
    body,
    headers,
    params,
    responseType,
    withCredentials,
  }: peticionFormato) {
    return await this.peticion({
      url,
      method: 'patch',
      headers,
      body,
      params,
      responseType,
      withCredentials,
    })
  }

  async delete({
    url,
    body,
    headers,
    params,
    responseType,
    withCredentials,
  }: peticionFormato) {
    return await this.peticion({
      url,
      method: 'delete',
      headers,
      body,
      params,
      responseType,
      withCredentials,
    })
  }
}
export const Servicios = new ServiciosClass()
