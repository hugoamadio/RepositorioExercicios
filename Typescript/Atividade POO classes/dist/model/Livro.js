"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Livro {
    constructor(titulo, autor, ano, disponivel = true) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicação = ano;
        this.disponivel = disponivel;
    }
    emprestar() {
        if (this.disponivel == true) {
            this.disponivel = false;
            console.log("O livro foi emprestado...");
        }
        else {
            console.log("O livro não está disponivel...");
        }
    }
    devolver() {
        this.disponivel = true;
        console.log("O livro foi devolvido...");
    }
}
exports.default = Livro;
