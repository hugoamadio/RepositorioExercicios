import styled from "styled-components";

const ButtonStyled = styled.button`
    background-color: #ffc4c4;
    box-sizing: border-box;
    padding: 14px;
    width: 80%;
    border-radius: 13px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    font-size: large;
    font-weight: 300;

    &:hover{
        cursor: pointer;
        background-color: #ffb6b6;
    }
`

export default ButtonStyled