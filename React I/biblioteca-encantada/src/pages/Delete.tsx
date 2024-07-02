import { useState } from "react"
import ButtonDefault from "../components/ButtonDefault/ButtonDefault"
import Form from "../components/Form/Form"
import Input from "../components/Input/Input"
import PageDefault from "../components/PageDefault"
import BooksDB from "../database/BooksDB"
import ModalExclude from "../components/ModalExclude/ModalExclude"

function Delete(){
    const [id, setID] = useState<number>(0)
    const [enableModal, setEnableModal] = useState<boolean>(false)

    function showModal(){
        setEnableModal(true)
    }

    function closeModal(){
        setEnableModal(false)
    }

    function handleSubmit(event: React.FormEvent){
        event.preventDefault()
        const findID = BooksDB.findIndex((book)=> book.id === id)
        if(findID !== -1){
            showModal()
        } else {
            alert("Livro não encontrado")
        }
    }

    return(
        <PageDefault>
            <Form submit={handleSubmit}>
                <h1>Deletar Livro</h1>
                <div style={{marginTop: '45px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '250px', gap: '10px'}}>
                    <Input 
                        placeholder="Digite o ID do livro" 
                        type="text"
                        style={{width:'64%', marginTop: '50px'}}
                        value={id.toString()}
                        onChange={event => setID(parseInt(event.target.value))}
                    />
                    <ButtonDefault 
                        type="submit" 
                        label="Excluir"
                        style={{width: '15vw', marginTop: '80px'}}
                    />
                </div>
            </Form>
            {enableModal && <ModalExclude idSelect={(id-1)} closeModal={closeModal}/>}
        </PageDefault>
    )
}

export default Delete