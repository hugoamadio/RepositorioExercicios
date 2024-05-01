"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Cavalo extends Animal_1.default {
    constructor(nome) {
        super(4, true, true);
        this.nome = nome;
    }
    andar() {
        console.log("Andando...");
    }
    comer() {
        console.log("Comendo...");
    }
    beberAgua() {
        console.log("Bebendo água...");
    }
    relinchar() {
        console.log("Relinchando...");
    }
    mostrarNome() {
        console.log(this.nome);
    }
    alterarNome(novoNome) {
        this.nome = novoNome;
        console.log(`Nome alterado para ${this.nome}`);
    }
}
exports.default = Cavalo;
