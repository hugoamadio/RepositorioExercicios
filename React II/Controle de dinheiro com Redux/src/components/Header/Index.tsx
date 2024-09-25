import Saldo from "../Saldo/Index"
import HeaderStyled from "./Styled"

function Header(){
    return(
        <HeaderStyled>
            <h1>Usuario</h1>
            <Saldo/>
        </HeaderStyled>
    )
}

export default Header