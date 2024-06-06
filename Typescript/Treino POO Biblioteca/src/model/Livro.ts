import LivroType from "../types/livroType";
import ItemBiblioteca from "./ItemBiblioteca";

class Livro extends ItemBiblioteca{
    private autor: string
    private ISBN: number

    constructor(livro: LivroType){
        super(livro.titulo, true)
        this.autor = livro.autor
        this.ISBN = livro.isbn
    }
}

export default Livro