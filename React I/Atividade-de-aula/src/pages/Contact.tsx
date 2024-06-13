import AppMenu from "../components/AppMenu";
import HeaderStyled from "../components/HeaderStyled";
import TitlePage from "../components/TitlePage";

function Contact(){
    return(
        <>
            <HeaderStyled><AppMenu/></HeaderStyled>
            <TitlePage showDivider={true} title="Contato"/>
        </>
    )
}

export default Contact