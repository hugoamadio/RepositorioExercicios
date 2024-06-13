import AppMenu from "../components/AppMenu";
import HeaderStyled from "../components/HeaderStyled";
import TitlePage from "../components/TitlePage";
import ProductsComponent from "../components/ProductsComponent";
import FooterComponent from "../components/FooterComponent";
import LogoComponent from "../components/LogoComponent";


function Products(){
    return(
        <>
            <HeaderStyled><LogoComponent/><AppMenu/></HeaderStyled>
            <TitlePage showDivider={true} title="Produtos"/>
            <ProductsComponent/>
            <FooterComponent/>
        </>
    )
}

export default Products