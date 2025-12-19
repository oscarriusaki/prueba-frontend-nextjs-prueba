import { configureStore } from '@reduxjs/toolkit'
import correspondenciaSlice from './correspondenciaSlice'
import academicoSlice from './academicoSlice'

export const store = configureStore({
  reducer: {
    correspondencia: correspondenciaSlice,
    academico: academicoSlice,
  },
})

store.subscribe(() => {
  const correspolndencia = store.getState().correspondencia
  const academico = store.getState().academico
  localStorage.setItem('correspondencia', JSON.stringify(correspolndencia))
  localStorage.setItem('academico', JSON.stringify(academico))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
