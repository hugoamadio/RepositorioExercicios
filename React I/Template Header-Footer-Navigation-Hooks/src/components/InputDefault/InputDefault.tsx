
import { ChangeEvent } from "react"
import InputStyled from "./InputStyled"

interface InputDefatulProps{
    type?: string,
    name?: string,
    value?: string,
    onchange?: (event: ChangeEvent<HTMLInputElement>) => void
}

function InputDefault({ type, name, value, onchange }: InputDefatulProps){
    return(
        <InputStyled type={type} name={name} value={value} onChange={onchange}/>
    )
}

export default InputDefault