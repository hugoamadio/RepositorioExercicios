import AppMenu from "../components/AppMenu"
import HeaderStyled from "../components/HeaderStyled"
import TitlePage from "../components/TitlePage"

function Home(){
    return(
        <>
            <HeaderStyled><AppMenu/></HeaderStyled>
            <TitlePage showDivider={true} title="Home"/>
        </>
    )   
}

export default Home