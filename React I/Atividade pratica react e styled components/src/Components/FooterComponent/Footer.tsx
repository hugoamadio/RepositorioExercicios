import NavegationMenu from "../NavegationMenu/NavegationMenu"
import DivLeftStyled from "./DivLeftStyled"
import DivRightStyled from "./DivRightStyled"
import FooterStyled from "./FooterStyled"

interface FooterProps{
    subText: string
}

function Footer({subText}: FooterProps){
    return (
        <FooterStyled >
            <DivLeftStyled>
                {subText}<NavegationMenu/>
            </DivLeftStyled>
            <DivRightStyled>Lorem ipsum dolor sites fugiat eum dolorum!</DivRightStyled>
        </FooterStyled>
    )
}

export default Footer