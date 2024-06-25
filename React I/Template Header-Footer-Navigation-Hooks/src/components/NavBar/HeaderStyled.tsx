import styled from "styled-components";

const HeaderStyled = styled.header`
    background-color: ${({theme}) =>  theme.colors.secondary};
    color: ${({theme}) => theme.colors.primary};
    height: 160px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 124px 0 0;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
`

export default HeaderStyled