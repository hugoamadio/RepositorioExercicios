import Footer from "./Footer/Footer"
import Header from "./Header/Header"

interface PageDefaultProps{
    children: React.ReactNode
}

function PageDefault({ children }: PageDefaultProps){

    const dataFooter = [
        <div>
            {Date()}
        </div>
    ]
    
    return(
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer data={dataFooter}/>
        </>
    )
}

export default PageDefault