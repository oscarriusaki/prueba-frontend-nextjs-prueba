import { ImportanteCRUDType } from '@/app/admin/(principal)/datos_academicos/types/importanteCRUDType'
import { PostUniversitarioCRUDType } from '@/app/admin/(principal)/datos_academicos/types/postUniversitarioCRUDType'
import { PreuniversitarioCRUDType } from '@/app/admin/(principal)/datos_academicos/types/preuniversitarioCRUDType'
import { UniversitarioCRUDType } from '@/app/admin/(principal)/datos_academicos/types/universitariosCRUDType'
import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit/src/createAction'

export type AcademicoState = {
  preuniversitario?: PreuniversitarioCRUDType | null
  universitario?: UniversitarioCRUDType | null
  postUniversitario?: PostUniversitarioCRUDType | null
  importante?: ImportanteCRUDType | null
  status?: 'idle' | 'saving' | 'saved' | 'finalized'
}

const saveState =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('academico') || 'null')
    : null

const initialState: AcademicoState = saveState || {
  preuniversitario: null,
  universitario: null,
  postUniversitario: null,
  importante: null,
  status: 'idle',
}

const academicoSlice = createSlice({
  name: 'academico',
  initialState,
  reducers: {
    setDataAcademico: (state, action: PayloadAction<AcademicoState>) => {
      state.status = 'saving'
      Object.assign(state, action.payload)
      state.status = 'saved'
    },
    clearDataAcademico: (state) => {
      Object.assign(state, null)
    },
  },
})

export const { setDataAcademico, clearDataAcademico } = academicoSlice.actions
export default academicoSlice.reducer
