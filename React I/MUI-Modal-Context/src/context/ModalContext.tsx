import { createContext, ReactNode, useState } from "react";

interface ModalDataType{
    title: string,
    content: string,
    label: string
}

interface ModalContextType{
    data: ModalDataType | undefined;
    setData: (data: ModalDataType | undefined ) => void;

    open: boolean;
    setOpen: (open: boolean) => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

interface ModalContextProviderType{
    children: ReactNode;
}

function ModalContextProvider({children}: ModalContextProviderType){
    const [data, setData] = useState<ModalDataType | undefined>(undefined)
    const [open, setOpen] = useState<boolean>(false)

    return(
        <ModalContext.Provider value={{data, open, setData, setOpen}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider