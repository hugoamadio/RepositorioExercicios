"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ingresso_1 = __importDefault(require("./Ingresso"));
class Camarote extends Ingresso_1.default {
    constructor(adicional) {
        super(50);
        this.adicional = adicional;
    }
    imprimeValor() {
        console.log(this.valor + this.adicional);
    }
}
exports.default = Camarote;
