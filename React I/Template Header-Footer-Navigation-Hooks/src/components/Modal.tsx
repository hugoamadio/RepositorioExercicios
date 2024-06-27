import styled from "styled-components"

interface ModalStyledProps{
    color: string
}

const ModalStyled = styled.div<ModalStyledProps>`
    width: 500px;
    height: 500px;
    border: 1px solid black;
    background-color: ${props => props.color};
    border-radius: 25px;
    box-sizing: border-box;
    padding: 35px;
    box-shadow: 5px 5px 10px gray;
`

interface ModalProps{
    title: string,
    content: string,
    backColor: string
}

function Modal({title, content, backColor}: ModalProps){
    return(
        <ModalStyled color={backColor}>
            <h1>{title}</h1>
            {content}
        </ModalStyled>
    )
}

export default Modal