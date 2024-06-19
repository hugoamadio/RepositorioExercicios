import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

interface PageDefaultProps{
    children: React.ReactNode
}


function PageDefault({ children }: PageDefaultProps){
    const dataFooter = [
        <div>Conteúdo 1</div>,
        <div>Conteúdo 2</div>,
        <div>Conteúdo 3</div>
    ]
    return (
        <>
            <Header/>
            <main>{ children }</main>
            <Footer data={dataFooter}/>
        </>
    )
        
    
}

export default PageDefault