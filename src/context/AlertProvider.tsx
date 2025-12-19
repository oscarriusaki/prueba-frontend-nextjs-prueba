import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";

interface FullScreenProviderContextType{
    children:ReactNode
}

export default function AlertProvider({
    children
}:FullScreenProviderContextType){
    return <SnackbarProvider maxSnack={1}>{children}</SnackbarProvider>
}