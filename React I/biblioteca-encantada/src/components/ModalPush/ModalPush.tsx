import DivStyled from "./DivStyled";

interface ModalPushProps{
    content: string;
}

function ModalPush({content}: ModalPushProps){
    return(
        <DivStyled>
            {content}
        </DivStyled>
    )
}

export default ModalPush