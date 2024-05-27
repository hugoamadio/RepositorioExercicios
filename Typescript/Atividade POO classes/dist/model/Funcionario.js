"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("./Usuario"));
class Funcionario extends Usuario_1.default {
    constructor(nome, cargo = true, biblioteca) {
        super(nome);
        this.cargo = cargo;
        this.biblioteca = biblioteca;
    }
    adicionarLivro(livro) {
        this.biblioteca.livros.push(livro);
        console.log("Livro adicionado...");
    }
    removerLivro(livro) {
        const findID = this.biblioteca.livros.findIndex(lib => lib.titulo == livro);
        if (findID != -1) {
            this.biblioteca.livros.splice(findID, 1);
            console.log("Livro removido...");
        }
        else {
            console.log("Livro não encontrado...");
        }
    }
}
exports.default = Funcionario;
