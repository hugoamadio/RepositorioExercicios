"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Imovel_1 = __importDefault(require("./Imovel"));
class Velho extends Imovel_1.default {
    constructor(desc) {
        super("Joaquim Lopes", 400000);
        this.desconto = desc;
    }
    imprimeValor() {
        console.log(`O valor do imóvel é de ${this.preco - this.desconto}`);
    }
    imprimeDesconto() {
        console.log(`O valor do desconto do imóvel é ${this.desconto}`);
    }
}
exports.default = Velho;
