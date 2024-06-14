import { Title } from "@mui/icons-material"
import { ElementInterno, SubTitle, Element } from "./ElementIconsStyled"

interface ElementIconProps{
    icon: JSX.Element,
    title: string,
    subTitle: string
}

function ElementIcon({icon, title, subTitle}: ElementIconProps){
    return(
        <Element>
            <ElementInterno>
                {icon}
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </ElementInterno>
        </Element>
    )
}

export default ElementIcon