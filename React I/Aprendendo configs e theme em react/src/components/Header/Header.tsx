import { Link } from "react-router-dom"
import navigation from "../../config/navigation"
import HeaderStyled from "./HeaderStyled"
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

function Header(){
    return(
        <HeaderStyled>
            <AccountBalanceRoundedIcon style={{position: 'absolute', top: '40px', left: '40px', fontSize: '70px'}}/>
            {navigation.map((item) => (
                <div>
                    <Link to={item.url}>{item.label}</Link>
                </div>
            ))}
        </HeaderStyled>
    )
}

export default Header