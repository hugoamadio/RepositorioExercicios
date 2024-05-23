"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Cachorro extends Animal_1.default {
    constructor(especie, numeroPatas, temRabo) {
        super(especie, numeroPatas, temRabo);
        this.especie = especie;
        this.numeroPatas = numeroPatas;
        this.temRabo = temRabo;
    }
    andar() {
        console.log("O Cachorro está andando...");
    }
    beberAgua() {
        console.log("O Cachorro está bebendo água...");
    }
    emitirSom() {
        console.log("O Cachorro está emitindo som...");
    }
    rolar() {
        console.log("O Cachorro está rolando...");
    }
}
exports.default = Cachorro;
