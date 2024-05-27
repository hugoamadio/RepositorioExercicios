"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Biblioteca {
    constructor() {
        this.livros = [];
        this.usuarios = [];
    }
    registrarUsuario(user) {
        this.usuarios.push(user);
        console.log(`Usuário ${user.nome} registrado com sucesso...`);
    }
    listarLivrosDisponiveis() {
        console.log('---- Livros Disponiveis ----');
        this.livros.forEach(livroBiblioteca => console.log(`${livroBiblioteca.titulo}`));
    }
    buscarLivroPorTitulo(titulo) {
        const indexTitulo = this.livros.findIndex(livroBiblioteca => livroBiblioteca.titulo == titulo);
        if (indexTitulo != -1) {
            console.log(this.livros[indexTitulo]);
        }
        else {
            console.log("Livro não encontrado...");
        }
    }
    emprestarLivro(titulo) {
        const indexTitulo = this.livros.findIndex(livroBiblioteca => livroBiblioteca.titulo == titulo);
        if (indexTitulo != -1) {
            this.livros[indexTitulo].emprestar();
        }
        else {
            console.log("Livro não encontrado...");
        }
    }
    devolverLivro(titulo) {
        const indexTitulo = this.livros.findIndex(livroBiblioteca => livroBiblioteca.titulo == titulo);
        if (indexTitulo != -1) {
            this.livros[indexTitulo].devolver();
            console.log("Livro devolvido...");
        }
        {
            console.log("Livro não encontrado...");
        }
    }
}
exports.default = Biblioteca;
