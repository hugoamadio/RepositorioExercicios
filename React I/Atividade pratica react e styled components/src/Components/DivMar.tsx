import styled from "styled-components"
import Image from "../assets/mar.jpg"

const HeaderContent = styled.div`
    background-image: url(${Image});
    background-size: cover;
    background-position: center bottom;
    height: 240px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 500;
    font-size: x-large;
    border-bottom: 1px solid black;
`

interface HeaderMarProps{
    text: string
}

function DivMar({text}: HeaderMarProps){
    return(
        <HeaderContent>{text}</HeaderContent>
    )
}

export default DivMar