import styled from "styled-components";

const HeaderStyled = styled.header`
    height: 160px;
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export default HeaderStyled