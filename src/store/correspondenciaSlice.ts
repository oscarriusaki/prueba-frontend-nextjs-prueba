// import { createSlice } from '@reduxjs/toolkit'
// import { PayloadAction } from '@reduxjs/toolkit/src/createAction'

// export type CorrespondenciaState = {
//   codigoExpediente?: string | null
//   pago?: boolean | null
//   fechaLegalizacion?: string | null
//   numeroFolio?: string | null
//   codigoTramite?: string | null
//   fecha?: string | null
//   nroCopiasLegalizadas?: number | null
//   entregado?: boolean | null
// }

// const saveState =
//   typeof window !== 'undefined'
//     ? JSON.parse(localStorage.getItem('correspondencia') || 'null')
//     : null

// const initialState: CorrespondenciaState = saveState || {
//   codigoExpediente: null,
//   pago: null,
//   fechaLegalizacion: null,
//   numeroFolio: null,
//   codigoTramite: null,
//   fecha: null,
//   nroCopiasLegalizadas: null,
//   entregado: null,
// }

// const correspondenciaSlice = createSlice({
//   name: 'correspondencia',
//   initialState,
//   reducers: {
//     setData: (state, action: PayloadAction<CorrespondenciaState>) => {
//       state.codigoExpediente = action.payload.codigoExpediente
//       state.pago = action.payload.pago
//       state.fechaLegalizacion = action.payload.fechaLegalizacion
//       state.numeroFolio = action.payload.numeroFolio
//       state.codigoTramite = action.payload.codigoTramite
//       state.fecha = action.payload.fecha
//       state.nroCopiasLegalizadas = action.payload.nroCopiasLegalizadas
//       state.entregado = action.payload.entregado
//     },
//     clearData: (state) => {
//       state.codigoExpediente = null
//       state.pago = null
//       state.fechaLegalizacion = null
//       state.numeroFolio = null
//       state.codigoTramite = null
//       state.fecha = null
//       state.nroCopiasLegalizadas = null
//       state.entregado = null
//     },
//   },
// })

// export const { setData, clearData } = correspondenciaSlice.actions
// export default correspondenciaSlice.reducer
