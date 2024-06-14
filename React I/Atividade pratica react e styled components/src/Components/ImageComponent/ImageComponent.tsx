import DivStyled from "./DivStyled"
import ImgReturn from "./ImgStyled"

interface ImageComponentProps{
    imgSrc: string
}

function ImageComponent({imgSrc}: ImageComponentProps){
    return (
        <DivStyled>
            <ImgReturn src={imgSrc}></ImgReturn>
        </DivStyled>
    )
}

export default ImageComponent