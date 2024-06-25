import { useState } from "react"
import PageDefault from "../components/PageDefault"
import ButtonDefault from "../components/ButtonDefault/ButtonDefault"

function Home(){
    const[counter, setCounter] = useState<number>(1)

    function upCounter(){
        setCounter(counter + 1)
    }

    return(
        <>
            <PageDefault>
                <h1>Contagem de cliques: {counter}</h1>
                <div>
                    <ButtonDefault action={upCounter} label="Contar"/>
                </div>
            </PageDefault>
        </>
    )
}

export default Home