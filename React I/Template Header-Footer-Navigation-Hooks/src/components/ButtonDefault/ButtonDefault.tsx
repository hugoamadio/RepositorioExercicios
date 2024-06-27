import ButtonStyled from "./ButtonStyled";

interface ButtonDefaultProps{
    label: string,
    action?: () => void,
    type?: string
}

function ButtonDefault({ action, label }: ButtonDefaultProps){
    return(
        <ButtonStyled onClick={action}>{label}</ButtonStyled>
    )
}

export default ButtonDefault