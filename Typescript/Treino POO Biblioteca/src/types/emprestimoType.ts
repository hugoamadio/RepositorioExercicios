import ItemBiblioteca from "../model/ItemBiblioteca";
import Usuario from "../model/Usuario";

interface emprestimoType{
    usuario: Usuario
    item: ItemBiblioteca
    dataEmprestimo: Date
    dataDevolucao?: Date
}

export default emprestimoType