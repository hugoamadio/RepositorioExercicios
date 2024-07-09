import { ReactNode } from "react"
import styled from "styled-components"

const FooterAppStyled = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 125px;
    width: 100vw;
    background-color: ${props => props.theme.colors.primary};
`

interface FooterAppProps{
    children?: ReactNode
}

function FooterApp({children}: FooterAppProps){
    return(
        <FooterAppStyled>
            {children}
        </FooterAppStyled>
    )
}

export default FooterApp