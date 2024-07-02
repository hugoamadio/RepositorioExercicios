import ButtonStyled from "./ButtonStyled";

interface ButtonDefaultProps{
    type: 'submit' | 'button' | 'reset';
    label?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

function ButtonDefault({type, label, children, style, onClick}: ButtonDefaultProps){
    return <ButtonStyled onClick={onClick} style={style} type={type}>{label}{children}</ButtonStyled>
}

export default ButtonDefault