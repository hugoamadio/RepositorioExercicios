import styled from "styled-components";

const HeaderStyled = styled.header`
    background-color: ${({theme}) =>  theme.colors.secondary};
    color: ${({theme}) => theme.colors.primary};
    height: 120px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export default HeaderStyled