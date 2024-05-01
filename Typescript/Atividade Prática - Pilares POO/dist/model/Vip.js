"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ingresso_1 = __importDefault(require("./Ingresso"));
class Vip extends Ingresso_1.default {
    constructor(adicionalVIP) {
        super(50);
        this.valorVIP = adicionalVIP;
    }
    imprimeValor() {
        console.log(this.valor + this.valorVIP);
    }
}
exports.default = Vip;
