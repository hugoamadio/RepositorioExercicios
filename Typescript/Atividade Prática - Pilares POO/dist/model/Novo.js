"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Imovel_1 = __importDefault(require("./Imovel"));
class Novo extends Imovel_1.default {
    constructor(adicional) {
        super("Getulio Vargas", 400000);
        this.adicional = adicional;
    }
    imprimeValor() {
        console.log(`O valor do imóvel é de ${this.preco + this.adicional}`);
    }
    imprimeAdicional() {
        console.log(`O valor do adicional do imóvel é ${this.adicional}`);
    }
}
exports.default = Novo;
