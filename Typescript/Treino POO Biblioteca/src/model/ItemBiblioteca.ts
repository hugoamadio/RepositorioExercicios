import itemBibliotecaType from "../types/itemBibliotecaType"

class ItemBiblioteca{
    titulo: string
    disponivel: boolean

    constructor(titulo: string, disponivel: boolean){
        this.titulo = titulo
        this.disponivel = disponivel
    }

    emprestar(){
        if(this.disponivel === true){
            return this.disponivel = false
        } else {
            return console.log("Livro indisponivel")
        }
    }

    devolver(){
        return this.disponivel = true
    }
}

export default ItemBiblioteca