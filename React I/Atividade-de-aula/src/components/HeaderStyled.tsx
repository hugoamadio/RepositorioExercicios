import { ReactNode } from "react";
import styled from "styled-components";

interface HeaderProps{
    children: ReactNode
}

const Header = styled.header`
    top: 0;
    left: 0;
    width: 100%;
    height: 85px;
    background-color: burlywood;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const HeaderStyled = ({children}: HeaderProps) =>{
    return <Header>{children}</Header>
}

export default HeaderStyled