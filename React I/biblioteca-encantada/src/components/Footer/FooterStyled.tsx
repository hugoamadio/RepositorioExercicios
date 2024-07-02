import styled from "styled-components";

const FooterStyled = styled.footer`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.colors.secondary};
`

export default FooterStyled