import Biblioteca from "./Biblioteca";
import Livro from "./Livro";
import Usuario from "./Usuario";

class Funcionario extends Usuario {
  cargo: boolean;
  biblioteca: Biblioteca

  constructor(nome: string, cargo: boolean = true, biblioteca: Biblioteca) {
    super(nome);
    this.cargo = cargo;
    this.biblioteca = biblioteca
  }

  adicionarLivro(livro: Livro) {
    this.biblioteca.livros.push(livro)
    console.log("Livro adicionado...")
  }

  removerLivro(livro: string){
    const findID = this.biblioteca.livros.findIndex(lib => lib.titulo == livro)
    if(findID != -1){
        this.biblioteca.livros.splice(findID,1)
        console.log("Livro removido...");
    } else {
        console.log("Livro não encontrado...")
    }
  }
}

export default Funcionario