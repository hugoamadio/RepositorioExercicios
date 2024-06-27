import { useState } from "react"
import PageDefault from "../components/PageDefault"
import Modal from "../components/Modal"

function ModalPage(){
    const [modal, setModal] = useState<boolean>(false)

    function showModal(e: React.MouseEvent<HTMLButtonElement>){
        setModal(true)
    }

    function hideModal(e: React.MouseEvent<HTMLButtonElement>){
        setModal(false)
    }

    return(
        <PageDefault>
            <h1>Pagina para abrir modal</h1>
            <button style={{marginTop: '100px', padding: '14px', backgroundColor: 'orange', border: '1px solid black', borderRadius: '12px', fontSize:'15px'}} onClick={showModal}>Clique aqui para abrir o modal</button>
            {modal && (<div style={{position: 'fixed', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
                <Modal backColor="yellow" content="Conteúdo da modal" title="Titulo da modal"/>
            </div>)}
        </PageDefault>
    )
}

export default ModalPage