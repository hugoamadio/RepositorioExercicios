import itemBibliotecaType from "../types/itemBibliotecaType"
import Emprestimo from "./Emprestimo"
import ItemBiblioteca from "./ItemBiblioteca"
import Usuario from "./Usuario"

class Biblioteca{
    nome: string
    endereco: string
    itens: ItemBiblioteca[] = []
    usuarios: Usuario[] = []
    emprestimos: Emprestimo[] = []

    constructor(nome: string, endereco: string){
        this.nome = nome
        this.endereco = endereco
    }

    adicionarItem(item: ItemBiblioteca){
        return this.itens.push(item)
    }

    removerItem(item: ItemBiblioteca){
        const index = this.itens.findIndex(item => ItemBiblioteca.name === item.titulo)
        if(index !== -1){
            return console.log("Item não encontrado")
        } else {
            return this.itens.splice(index, 1)
        }
    }

    registrarUsuario(usuario: Usuario){
        return this.usuarios.push(usuario)
    }
    
    removerUsuario(usuario: Usuario){
        const index = this.usuarios.findIndex(item => item.nome === usuario.nome)
    }
}