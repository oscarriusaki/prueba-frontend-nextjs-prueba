export const optionMenuContactos = [
  {
    tipo: 'adicionar',
    nombre: 'Adicionar item',
    icono: 'add',
  },
  {
    tipo: 'eliminar',
    nombre: 'Elminar',
    icono: 'delete',
  },
]

export interface InicioCRUDType {
  id?: string
  nombre: string
  apellido: string
  carnet: string
  correo: string
  telefono: string
  terminos: boolean
  estado?: string
}

export interface CrearEditarInicioCRUDType {
  id?: string
  nombre: string
  apellido: string
  carnet: string
  correo: string
  telefono: string
  terminos: boolean
}
