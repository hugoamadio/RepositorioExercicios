import Livro from "./Livro"

class Usuario{
    nome: string
    private id: number

    constructor(nome:string, id:number = Date.now()){
        this.nome = nome
        this.id = id
    }

    emprestarLivro(livro: Livro){
        livro.emprestar()
    }

    devolverLivro(livro: Livro){
        livro.devolver()
    }
}

export default Usuario