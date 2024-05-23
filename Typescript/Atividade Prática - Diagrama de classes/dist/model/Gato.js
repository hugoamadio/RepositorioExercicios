"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Gato extends Animal_1.default {
    constructor(especie, numeroPatas, temRabo) {
        super(especie, numeroPatas, temRabo);
        this.especie = especie;
        this.numeroPatas = numeroPatas;
        this.temRabo = temRabo;
    }
    andar() {
        console.log("O Gato está andando...");
    }
    beberAgua() {
        console.log("O Gato está bebendo água...");
    }
    emitirSom() {
        console.log("O Gato está emitindo som...");
    }
    brincar() {
        console.log("O gato está brincando");
    }
}
exports.default = Gato;
