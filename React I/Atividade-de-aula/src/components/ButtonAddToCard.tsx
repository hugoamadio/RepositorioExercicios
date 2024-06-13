import styled from "styled-components"

const BTNADD = styled.button`
    background-color: #12eb0a;
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

function ButtonAddToCard({text}: BtnProps){
    return <BTNADD>{text}</BTNADD>
}

export default ButtonAddToCard