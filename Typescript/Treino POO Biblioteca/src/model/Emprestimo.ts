import { emprestimoDB } from "../database/emprestimo.db"
import emprestimoType from "../types/emprestimoType"
import LivroType from "../types/livroType"
import ItemBiblioteca from "./ItemBiblioteca"
import Livro from "./Livro"
import Usuario from "./Usuario"

class Emprestimo{
    usuario: Usuario
    item: ItemBiblioteca
    dataEmprestimo: Date
    dataDevolucao?: Date

    constructor(emprestimo: emprestimoType){
        this.usuario = emprestimo.usuario
        this.item = emprestimo.item
        this.dataEmprestimo = emprestimo.dataEmprestimo
        this.dataDevolucao = emprestimo.dataDevolucao
    }

    registrarEmprestimo(){
        this.dataEmprestimo = new Date()
        this.item.emprestar()
    }

    registrarDevolucao(){
        this.dataDevolucao = new Date()
        this.item.devolver()
    }
}

export default Emprestimo