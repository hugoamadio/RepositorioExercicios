import styled from "styled-components"

const BTN = styled.button`
    background-color: red;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
    color: black;
    font-weight: 700;
    font-size: large;
    transition: transform 0.3s ease;

    &:hover{
        transform: translate(1px,-1px);
        cursor: pointer;
    }
`
interface BtnProps{
    text: string
}

function ButtonBuy({text}: BtnProps){
    return <BTN>{text}</BTN>
}

export default ButtonBuy