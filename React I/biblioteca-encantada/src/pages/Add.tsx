import React, { useState } from "react"
import ButtonDefault from "../components/ButtonDefault/ButtonDefault"
import Form from "../components/Form/Form"
import Input from "../components/Input/Input"
import PageDefault from "../components/PageDefault"
import ModalPush from "../components/ModalPush/ModalPush"
import BooksDB from "../database/BooksDB"

function Add(){
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

    function cleanForms(){
        setId(0)
        setTitulo('')
        setAutor('')
        setAno(0)
        setData('')
        setGenero('')
        setDescricao('')
    }

    function handleSubmit(event: React.FormEvent){
        event.preventDefault()
        BooksDB.push({
            id: id,
            titulo: titulo,
            autor: autor,
            ano: ano,
            data: data,
            genero: genero,
            descricao: descricao
        })
        showModal('Livro adicionado com sucesso!!')
        alert(BooksDB[0])
        cleanForms()
    }

    return(
        <PageDefault>
            <Form submit={handleSubmit}>
                <h1>Adicionar Livros</h1>
                <div style={{marginTop: '45px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '250px', gap: '10px'}}>
                    <div style={{width: '80%'}}>
                        <Input 
                            style={{width: '22%', marginRight:'15px'}} 
                            placeholder="ID" 
                            required={true} 
                            onChange={event => setId(Number(event.target.value))}
                            value={id.toString()}
                        />

                        <Input 
                            style={{width: '74%'}} 
                            placeholder="Título" 
                            required={true} 
                            onChange={event => setTitulo(event.target.value)}
                            value={titulo}
                        />
                    </div>

                    <Input 
                        placeholder="Autor" 
                        required={true} 
                        onChange={event => setAutor(event.target.value)} 
                        value={autor}
                    />

                    <Input 
                        placeholder="Ano de Publicação" 
                        required={true} 
                        onChange={event => setAno(parseInt(event.target.value))}
                        value={ano.toString()}
                    />
                    
                    <Input 
                        placeholder="Data de Cadastro" 
                        required = {true}
                        onChange={event => setData(event.target.value)}
                        value={data}
                    />

                    <Input 
                        placeholder="Gênero" 
                        required={true}
                        onChange={event => setGenero(event.target.value)}
                        value={genero}
                    />

                    <Input 
                        placeholder="Descrição"
                        onChange={event => setDescricao(event.target.value)}
                        value={descricao}
                    />
                </div>

                <ButtonDefault type="submit" label="Cadastrar"/>                
            </Form>

            {enableModal  && <ModalPush content={modalContent}/>}
        </PageDefault>
    )
}

export default Add