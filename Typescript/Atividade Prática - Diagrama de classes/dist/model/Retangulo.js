"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FormatoDeDesenho_1 = __importDefault(require("./FormatoDeDesenho"));
class Retangulo extends FormatoDeDesenho_1.default {
    constructor(comprimento, altura) {
        super();
        this.comprimento = comprimento;
        this.altura = altura;
    }
    desenhar() {
        console.log(`Desenhando um retangulo com comprimento:${this.comprimento} e altura:${this.altura}`);
    }
    redimensionar() {
        console.log("Redimensionando o retangulo...");
    }
}
exports.default = Retangulo;
