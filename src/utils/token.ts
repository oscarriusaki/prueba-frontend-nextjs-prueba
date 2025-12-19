import { decodeToken } from "react-jwt"

interface JWTPayload {
    exp:number;
    [key:string]: number | string | boolean | null| object;
}

export const verificarToken = (token:string): boolean => {
    const myDecodedToken = decodeToken<JWTPayload>(token)
    if(!myDecodedToken) return false
    const caducidad = new Date(myDecodedToken.exp * 1000)
    return new Date().getTime() - caducidad.getTime() < 0
}
