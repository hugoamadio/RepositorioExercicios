import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 700;
`

const Nav = styled.nav`
    display: flex;
    text-decoration: none;
    gap: 30px;
    color: black;
`

function AppMenu(){
    return (
        <>
            <Nav>
                <StyledLink to={"/"}>Home</StyledLink> | <StyledLink to={"/products"}>Produtos</StyledLink> | <StyledLink to={"/contact"}>Contato</StyledLink>
            </Nav>
        </>
    )
}

export default AppMenu