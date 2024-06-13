import styled from "styled-components";
import logo from "../assets/logo.jpg"

const ImgLogo = styled.img`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    position: absolute;
    left: 150px;
`

function LogoComponent(){
    return (
        <ImgLogo src={logo}/>
    )
}

export default LogoComponent