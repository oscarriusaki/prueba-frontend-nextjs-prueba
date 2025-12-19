import { Constantes } from '@/config/Constantes'
import pacakgeJson from '../../package.json'
import { IZXCVBNResult } from 'zxcvbn-typescript'

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const base64 = (data: string) => {
  return Buffer.from(data).toString('base64')
}

export const encodeBase64 = (data: string) => {
  return Buffer.from(data).toString('base64')
}

export const decodeBase64 = (data: string) => {
  return Buffer.from(data, 'base64').toString('ascii')
}

export const titleCase = (word: string) => {
  return word.length <= 1
    ? word.toUpperCase()
    : word
        .toLowerCase()
        .split('')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export const siteName = () => {
  return Constantes.siteName ?? ''
}

export const versionNumber = () => {
  return pacakgeJson.version
}

export const seguridadPass = async (pass: string): Promise<IZXCVBNResult> => {
  const zxcvbnLib = (await import('zxcvbn-typescript')).default
  return zxcvbnLib(pass)
}

export const esDispositivoTactil = () => {
  const tieneMouse = window.matchMedia('(pointer: fine)').matches
  if (tieneMouse) {
    return false // Da prioridad a los dispositivos con mouse
  }
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches
  )
}
