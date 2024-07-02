import BooksDB from "../../database/BooksDB";
import BookComponent from "../BookComponent/BookComponent";
import ButtonDefault from "../ButtonDefault/ButtonDefault"
import DivExcludeStyle from "./DivExcludeStyle"

interface ModalExcludeProps{
    closeModal: () => void;
    idSelect: number;
}

function ModalExclude({closeModal, idSelect}: ModalExcludeProps){

    function excludeBook(){
        BooksDB.splice(idSelect, 1)
        closeModal()
    }   


    return(
        <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: "100vw",
            height: "100vh",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(10px)'
        }}>
            <DivExcludeStyle>
                <h2 style={{marginBottom: '25px'}}>Tem Certeza que deseja excluir?</h2>
                <BookComponent>
                            <h2>ID: {BooksDB[idSelect].id}</h2>
                            <h2>{BooksDB[idSelect].titulo}</h2>
                            <p><strong>Autor:</strong> {BooksDB[idSelect].autor}</p>
                            <p><strong>Ano:</strong> {BooksDB[idSelect].ano}</p>
                            <p><strong>Data:</strong> {BooksDB[idSelect].data}</p>
                            <p><strong>Gênero:</strong> {BooksDB[idSelect].genero}</p>
                            <p><strong>Descrição:</strong> {BooksDB[idSelect].descricao}</p>
                </BookComponent>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '35px',
                    marginTop: '45px'
                }}>
                    <ButtonDefault
                        type="button"
                        label="Sim"
                        style={{
                            width: '130px',
                            backgroundColor: 'red'
                        }}
                        onClick={excludeBook}
                    />

                    <ButtonDefault
                        type="button"
                        label="Não"
                        style={{
                            width: '130px',
                            backgroundColor: 'green'
                        }}
                        onClick={closeModal}
                    />
                </div>
            </DivExcludeStyle>
        </div>
    )
}

export default ModalExclude