import Livro from "./Livro";
import Usuario from "./Usuario";

class Biblioteca{
    livros: Livro[]
    usuarios: Usuario[]

    constructor(){
        this.livros = []
        this.usuarios = []
    }

    registrarUsuario(user: Usuario){
        this.usuarios.push(user)
    }

    listarLivrosDisponiveis(){
        console.log('---- Livros Disponiveis ----')
        this.livros.forEach(livroBiblioteca => console.log(`${livroBiblioteca.titulo}`))
    }

    buscarLivroPorTitulo(titulo: string){
        const indexTitulo = this.livros.findIndex(livroBiblioteca => livroBiblioteca.titulo == titulo)
        if(indexTitulo != -1){
            console.log(this.livros[indexTitulo]);
        } else {
            console.log("Livro não encontrado...");
        }
    }

    emprestarLivro(titulo: string){
        const indexTitulo = this.livros.findIndex(livroBiblioteca => livroBiblioteca.titulo == titulo)
        if(indexTitulo != -1){
            this.livros[indexTitulo].emprestar()
        } else {
            console.log("Livro não encontrado...");
        }
    }

    devolverLivro(titulo: string){
        const indexTitulo = this.livros.findIndex(livroBiblioteca => livroBiblioteca.titulo == titulo)
        if(indexTitulo != -1){
            this.livros[indexTitulo].devolver()
            console.log("Livro devolvido...")
        } {
            console.log("Livro não encontrado...");
        }
    }
}

export default Biblioteca