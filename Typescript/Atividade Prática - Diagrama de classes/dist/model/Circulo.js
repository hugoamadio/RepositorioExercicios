"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FormatoDeDesenho_1 = __importDefault(require("./FormatoDeDesenho"));
class Circulo extends FormatoDeDesenho_1.default {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    desenhar() {
        console.log(`Desenhando um circulo de raio ${this.raio}...`);
    }
    redimensionar() {
        console.log(`Redimensionando o circulo...`);
    }
}
exports.default = Circulo;
