import { ChangeEvent } from "react";
import InputStyled from "./InputStyled";

interface InputProps{
    placeholder?: string;
    type?: 'text' | 'password';
    style?: React.CSSProperties;
    required?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

function Input({placeholder, type, style, required = false, onChange, value}: InputProps){
    return(
        <InputStyled 
            style={style} 
            type={type} 
            placeholder={placeholder} 
            required={required} 
            onChange={onChange}
            value={value}
        />
    )
}

export default Input