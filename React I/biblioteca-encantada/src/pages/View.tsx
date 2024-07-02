import BookComponent from "../components/BookComponent/BookComponent"
import PageDefault from "../components/PageDefault"
import BooksDB from "../database/BooksDB"

function View(){
    return(
        <PageDefault>
            <div style={{
                width: "100%",
                height: '100%',
                gap: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                    {BooksDB.map((book) =>(
                        <BookComponent>
                            <h2>ID: {book.id}</h2>
                            <h2>{book.titulo}</h2>
                            <p><strong>Autor:</strong> {book.autor}</p>
                            <p><strong>Ano:</strong> {book.ano}</p>
                            <p><strong>Data:</strong> {book.data}</p>
                            <p><strong>Gênero:</strong> {book.genero}</p>
                            <p><strong>Descrição:</strong> {book.descricao}</p>
                        </BookComponent>
                    ))}
            </div>
        </PageDefault>
    )
}

export default View