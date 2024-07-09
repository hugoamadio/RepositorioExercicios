import { ReactNode } from "react";
import AppStyled from "../../components/AppStyled";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterApp from "../../components/FooterApp/FooterApp";

interface DefaulLaytoutProps{
    children: ReactNode;
    config?: {
        navigation: boolean;
        footer: boolean;
    }
}

function DefaultLayout({ children, config }: DefaulLaytoutProps){
    return(
        <AppStyled>
            {config?.navigation !== false && <HeaderComponent/>}

            {children}

            {config?.footer !== false && <FooterApp/>}
        </AppStyled>
    )
}

export default DefaultLayout