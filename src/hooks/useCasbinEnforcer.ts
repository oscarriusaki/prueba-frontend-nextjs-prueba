// import { PoliticaType } from '@/app/login/types/loginTypes'
// import { basicModel, basicPolicy } from '@/utils/casbin'
// import { imprimir } from '@/utils/imprimir'
// import { Enforcer } from 'casbin'

// interface InterpretarPermisoParams {
//   routerName: string
//   enforcer?: Enforcer
//   rol?: string
// }

// interface PermisoSobreAccionParams {
//   enforcer?: Enforcer
//   rol: string
//   objeto: string
//   accion: string
// }

// export const useCasbinEnforcer = () => {
//   interface VerificarAutorizacionType {
//     enforcer?: Enforcer
//     politica?: PoliticaType
//   }

//   const inicializarCasbin = async (politicas: string[][]) => {
//     const casbinLib = await import('casbin')

//     imprimir(`casbinLib`, casbinLib)
//     const model = casbinLib.newModelFromString(basicModel)
//     const policy = new casbinLib.StringAdapter(basicPolicy)
//     const enforcerTemp: Enforcer = await casbinLib.newEnforcer(model, policy)
//     if (!enforcerTemp) {
//       throw new Error('Casbin no pudo inicializarse')
//     }

//     for (const p of politicas) {
//       await enforcerTemp.addPolicy(p[0], p[1], p[2], p[4], p[5])
//     }
//     return enforcerTemp
//   }

//   const verificarAutorizacion = async ({
//     enforcer,
//     politica,
//   }: VerificarAutorizacionType): Promise<boolean> => {
//     return (
//       (await enforcer?.enforce(
//         politica?.sujeto,
//         politica?.objeto,
//         politica?.accion
//       )) ?? false
//     )
//   }

//   const permisoSobreAccion = ({
//     enforcer,
//     rol,
//     objeto,
//     accion,
//   }: PermisoSobreAccionParams) => {
//     return verificarAutorizacion({
//       enforcer,
//       politica: {
//         sujeto: rol,
//         objeto: objeto,
//         accion: accion,
//       },
//     })
//   }

//   const interpretarPermiso = async ({
//     routerName,
//     enforcer,
//     rol,
//   }: InterpretarPermisoParams) => {
//     return {
//       read: await verificarAutorizacion({
//         enforcer: enforcer,
//         politica: {
//           sujeto: rol ?? '',
//           objeto: routerName,
//           accion: 'read',
//         },
//       }),
//       create: await verificarAutorizacion({
//         enforcer: enforcer,
//         politica: {
//           sujeto: rol ?? '',
//           objeto: routerName,
//           accion: 'create',
//         },
//       }),
//       update: await verificarAutorizacion({
//         enforcer: enforcer,
//         politica: {
//           sujeto: rol ?? '',
//           objeto: routerName,
//           accion: 'update',
//         },
//       }),
//       delete: await verificarAutorizacion({
//         enforcer: enforcer,
//         politica: {
//           sujeto: rol ?? '',
//           objeto: routerName,
//           accion: 'delete',
//         },
//       }),
//     }
//   }
//   return { inicializarCasbin, interpretarPermiso, permisoSobreAccion }
// }
