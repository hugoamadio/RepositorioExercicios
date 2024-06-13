import styled from "styled-components"
import burguer1IMG from "../assets/burguer1.jpg"
import burguer2IMG from "../assets/burguer2.jpg"
import burguer3IMG from "../assets/burguer3.jpg"
import ImgMediaCard from "./CardMaterialUI"

const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 16px;
    flex-wrap: wrap;
`

function ProductsComponent(){
    return(
        <>
            <DivContainer>
                <ImgMediaCard content="Descrição desse grande xburguer" img={burguer1IMG} name="X-BURGÃO"/>
                <ImgMediaCard content="Descrição desse grande xburguer" img={burguer2IMG} name="DUPLO X-BURGÃO"/>
                <ImgMediaCard content="Descrição" img={burguer3IMG} name="DUPLO X-BURGÃO"/>
                <ImgMediaCard content="Descrição desse grande xburguer" img={burguer1IMG} name="X-BURGÃO"/>
                <ImgMediaCard content="Descrição desse grande xburguer" img={burguer2IMG} name="DUPLO X-BURGÃO"/>
                <ImgMediaCard content="Descrição" img={burguer3IMG} name="DUPLO X-BURGÃO"/>
                <ImgMediaCard content="Descrição desse grande xburguer" img={burguer1IMG} name="X-BURGÃO"/>
                <ImgMediaCard content="Descrição desse grande xburguer" img={burguer2IMG} name="DUPLO X-BURGÃO"/>
                <ImgMediaCard content="Descrição" img={burguer3IMG} name="DUPLO X-BURGÃO"/>
                <ImgMediaCard content="Descrição desse grande xburguer" img={burguer1IMG} name="X-BURGÃO"/>
                <ImgMediaCard content="Descrição desse grande xburguer" img={burguer2IMG} name="DUPLO X-BURGÃO"/>
                <ImgMediaCard content="Descrição" img={burguer3IMG} name="DUPLO X-BURGÃO"/>
            </DivContainer>
        </>
    )
}

export default ProductsComponent