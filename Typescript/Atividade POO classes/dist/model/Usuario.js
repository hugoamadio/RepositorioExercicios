"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(nome, id = Date.now()) {
        this.nome = nome;
        this.id = id;
    }
    emprestarLivro(livro) {
        livro.emprestar();
    }
    devolverLivro(livro) {
        livro.devolver();
    }
}
exports.default = Usuario;
