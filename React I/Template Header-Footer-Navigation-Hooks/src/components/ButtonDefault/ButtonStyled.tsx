import styled from "styled-components";

const ButtonStyled = styled.button`
    padding: 12px;
    background-color: ${({theme})=> theme.colors.secondary};
    border-radius: 5px;
    opacity: 0.9;
`

export default ButtonStyled