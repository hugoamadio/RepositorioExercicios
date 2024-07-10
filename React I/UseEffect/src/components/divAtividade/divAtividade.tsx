import { ReactNode } from "react"
import DivStyled from "./divStyled"

interface DivAtividadeProps{
    children: ReactNode
}

function DivAtividade({children}: DivAtividadeProps){
    return(
        <DivStyled>
            {children}
        </DivStyled>
    )
}

export default DivAtividade