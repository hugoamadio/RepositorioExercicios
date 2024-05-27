"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Biblioteca_1 = __importDefault(require("./model/Biblioteca"));
const Funcionario_1 = __importDefault(require("./model/Funcionario"));
const Livro_1 = __importDefault(require("./model/Livro"));
const Usuario_1 = __importDefault(require("./model/Usuario"));
const biblioteca = new Biblioteca_1.default();
const livroHarryPotter = new Livro_1.default('Harry Potter', "JK Holing", 1997);
const livroGalinhaPintadinha = new Livro_1.default('Galinha Pintadinha', 'almir sater', 2005);
const livroSaciPerere = new Livro_1.default('Saci Perere', "monteiro lobato", 2001);
const funcionario = new Funcionario_1.default('hugo', true, biblioteca);
const usuario = new Usuario_1.default('hugo');
funcionario.adicionarLivro(livroHarryPotter);
funcionario.adicionarLivro(livroGalinhaPintadinha);
funcionario.adicionarLivro(livroSaciPerere);
funcionario.removerLivro('Harry Potter');
biblioteca.listarLivrosDisponiveis();
biblioteca.registrarUsuario(new Usuario_1.default('antonio'));
biblioteca.registrarUsuario(new Usuario_1.default('jão'));
biblioteca.registrarUsuario(new Usuario_1.default('toninho'));
biblioteca.usuarios.forEach(user => console.log(user));
biblioteca.buscarLivroPorTitulo('Saci Perere');
biblioteca.emprestarLivro('Saci Perere');
biblioteca.buscarLivroPorTitulo('Saci Perere');
biblioteca.emprestarLivro('Saci Perere');
