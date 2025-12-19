import dayjs, { ManipulateType } from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
import { imprimir } from './imprimir'

dayjs.extend(customParseFormat)
dayjs.extend(relativeTime)

dayjs.locale('es')

export const stringToDate = (fecha: string, formatoInicial: string): Date => {
  return dayjs(fecha, formatoInicial, true).toDate()
}

export const validarFechaFormato = (date: string, formatoNuevo: string) => {
  imprimir(`${date} -> ${dayjs(date).format(formatoNuevo)}`)
  return dayjs(date).format(formatoNuevo)
}

export const formatoFecha = (fecha: string, formatoNuevo: string): string => {
  imprimir(`${fecha} -> ${formatoNuevo}:${dayjs(fecha).format(formatoNuevo)}`)
  return dayjs(fecha).format(formatoNuevo)
}

export const formatoLiteral = (fecha: Date) => {
  const fechaDayjs = dayjs(fecha)

  if (!fechaDayjs.isValid()) {
    return 'Fecha inválida'
  }

  // Obtener la diferencia relativa al tiempo actual
  return fechaDayjs.fromNow()
}

export const generarFechaAnterior = (
  value: number,
  unit: ManipulateType,
  formato: string
): string => dayjs().subtract(value, unit).format(formato)
