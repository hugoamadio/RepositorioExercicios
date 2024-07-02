import { Link } from "react-router-dom";
import navigation from "../../configs/navigation";
import HeaderStyled from "./HeaderStyled";

function Header(){
    return(
        <HeaderStyled>
            {navigation.map((item)=>(
                <div>
                    <Link to={item.url}>{item.label}</Link>
                </div>
            ))}
        </HeaderStyled>
    )
}

export default Header