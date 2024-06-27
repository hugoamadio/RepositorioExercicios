import styled from "styled-components";

const FooterStyled = styled.footer`
    position: relative;
    height: 140px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.colors.secondary};
    gap: 50px;
`

export default FooterStyled