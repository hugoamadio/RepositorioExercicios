import { Link } from "react-router-dom"

function NavegationMenu(){
    return(
        <>
            <Link to={"/about"}>About</Link> '•' <Link to={"/contact"}>Contact</Link> '•' <Link to={"/termsofuse"}>Terms of Use</Link> '•' 
            <Link to={"/privacy"}> Privacy Policy </Link>
        </>
    )
}

export default NavegationMenu