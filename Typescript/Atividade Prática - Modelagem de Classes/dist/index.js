"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bola_1 = __importDefault(require("./model/Bola"));
const BombaCombustivel_1 = __importDefault(require("./model/BombaCombustivel"));
const Calculadora_1 = __importDefault(require("./model/Calculadora"));
const Carro_1 = __importDefault(require("./model/Carro"));
const Conta_1 = __importDefault(require("./model/Conta"));
const Contador_1 = __importDefault(require("./model/Contador"));
const contagem = new Contador_1.default;
const bola = new Bola_1.default("preta", 30, "Plastico");
const conta = new Conta_1.default(105060, "Jorge Benjor", 500);
const calc = new Calculadora_1.default();
const bombaGasolina = new BombaCombustivel_1.default("gasolina", 5.39, 250);
const bombaAlcool = new BombaCombustivel_1.default("Alcool", 3.51, 150);
const meuFusca = new Carro_1.default(11, 345);
meuFusca.obterGasolina();
