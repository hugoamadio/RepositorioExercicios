import { ReactNode } from "react";
import styled from "styled-components";

const HeaderComponentStyled = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 145px;
    width: 100vw;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`

interface HeaderComponentProps{
    children?: ReactNode
}

function HeaderComponent({ children }:HeaderComponentProps){
    return(
        <HeaderComponentStyled>
            { children }
        </HeaderComponentStyled>
    )
}

export default HeaderComponent