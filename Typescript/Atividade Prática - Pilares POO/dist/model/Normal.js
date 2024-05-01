"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ingresso_1 = __importDefault(require("./Ingresso"));
class Normal extends Ingresso_1.default {
    constructor() {
        super(50);
    }
    imprimeValor() {
        console.log(this.valor);
    }
}
exports.default = Normal;
