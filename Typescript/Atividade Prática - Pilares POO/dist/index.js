"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = __importDefault(require("./model/Cachorro"));
const Cavalo_1 = __importDefault(require("./model/Cavalo"));
const Gato_1 = __importDefault(require("./model/Gato"));
// const ingressoNormal = new Normal()
// ingressoNormal.imprimeValor()
// const ingressoVip = new Vip(100)
// ingressoVip.imprimeValor()
// const ingressoCamarote = new Camarote(300)
// ingressoCamarote.imprimeValor()
// const imovelNovo = new Novo(60000)
// imovelNovo.imprimeValor()
// imovelNovo.imprimeAdicional()
// const imovelVelho = new Velho(25000)
// imovelVelho.imprimeValor()
// imovelVelho.imprimeDesconto()
const cachorro = new Cachorro_1.default('leila');
cachorro.andar();
cachorro.beberAgua();
cachorro.comer();
cachorro.latir();
cachorro.mostrarNome();
cachorro.alterarNome('catarina');
cachorro.mostrarNome();
const gato = new Gato_1.default('fred');
gato.andar();
gato.beberAgua();
gato.comer();
gato.miar();
gato.mostrarNome();
gato.alterarNome('bento');
gato.mostrarNome();
const cavalo = new Cavalo_1.default('neto');
cavalo.andar();
cavalo.beberAgua();
cavalo.comer();
cavalo.relinchar();
cavalo.mostrarNome();
cavalo.alterarNome('ferradura');
cavalo.mostrarNome();
