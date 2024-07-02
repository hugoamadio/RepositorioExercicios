import { useState } from "react"
import Form from "../components/Form/Form"
import PageDefault from "../components/PageDefault"
import Input from "../components/Input/Input"
import ButtonDefault from "../components/ButtonDefault/ButtonDefault"
import BooksDB from "../database/BooksDB"
import ModalPush from "../components/ModalPush/ModalPush"

function Edit(){
    const [enableModal, setEnableModal] = useState<boolean>(false)
    const [modalContent, setModalContent] = useState<string>('')
    const [id, setId] = useState<number>(0)
    const [titulo, setTitulo] = useState<string>('')
    const [autor, setAutor] = useState<string>('')
    const [ano, setAno] = useState<number>(0)
    const [data, setData] = useState<string>('')
    const [genero, setGenero] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')

    function showModal(content: string){
        setModalContent(content)
        setEnableModal(true)
        setTimeout(() => {
            setEnableModal(false)
        }, 2500);
    }

    function updateBook(event: React.FormEvent){
        event.preventDefault()

        const bookIndex = BooksDB.findIndex(book => book.id === id)
        if(bookIndex !== -1){
            BooksDB[bookIndex] = {
                id,
                titulo,
                autor,
                ano,
                data,
                genero,
                descricao
            }
            showModal("Livro alterado com sucesso!")
        } else {
            showModal("Livro não encontrado!")
        }
    }

    return(
        <PageDefault>
            <Form submit={updateBook}>
                <h1>Atualizar Livros</h1>
                <div style={{marginTop: '45px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '250px', gap: '10px'}}>
                    <div style={{width: '80%'}}>
                        <Input 
                            style={{width: '22%', marginRight:'15px'}} 
                            placeholder="ID" 
                            required={false} 
                            onChange={event => {setId(Number(event.target.value))}}
                            value={id.toString()}
                        />

                        <Input 
                            style={{width: '74%'}} 
                            placeholder="Título" 
                            required={false} 
                            onChange={event => setTitulo(event.target.value)}
                            value={titulo}
                        />
                    </div>

                    <Input 
                        placeholder="Autor" 
                        required={false} 
                        onChange={event => setAutor(event.target.value)} 
                        value={autor}
                    />

                    <Input 
                        placeholder="Ano de Publicação" 
                        required={false} 
                        onChange={event => setAno(parseInt(event.target.value))}
                        value={ano.toString()}
                    />
                    
                    <Input 
                        placeholder="Data de Cadastro" 
                        required = {false}
                        onChange={event => setData(event.target.value)}
                        value={data}
                    />

                    <Input 
                        placeholder="Gênero" 
                        required={false}
                        onChange={event => setGenero(event.target.value)}
                        value={genero}
                    />

                    <Input 
                        placeholder="Descrição"
                        onChange={event => setDescricao(event.target.value)}
                        value={descricao}
                    />
                </div>

                <ButtonDefault type="submit" label="Atualizar"/>                
            </Form>
            {enableModal  && <ModalPush content={modalContent}/>}
        </PageDefault>
    )
}

export default Edit