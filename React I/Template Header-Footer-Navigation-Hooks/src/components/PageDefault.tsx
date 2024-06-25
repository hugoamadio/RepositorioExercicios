import Footer from "./Footer/Footer"
import NavBar from "./NavBar/NavBar"

interface PageDefaultProps{
    children: React.ReactNode
}

function PageDefault({ children }: PageDefaultProps){

    const dataFooter = [
        <div><h3>Conteúdo do footer 1</h3></div>,
        <div><h3>Conteúdo do footer 1</h3></div>,
        <div><h3>Conteúdo do footer 1</h3></div>
    ]

    return(
        <>
            <NavBar/>
            <main style={{display: 'flex', alignItems: 'center', padding: '40px', flexDirection: 'column'}}>
            {children}
            </main>
            <Footer data={dataFooter}/>
        </>
    )
}

export default PageDefault