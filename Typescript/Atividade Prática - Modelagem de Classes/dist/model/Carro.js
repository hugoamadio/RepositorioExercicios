"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Carro {
    constructor(consumo, qntTanque = 0) {
        this.consumo = consumo;
        this.qntTanque = qntTanque;
    }
    andar(distancia) {
        const placeholder = distancia / this.consumo;
        if (this.qntTanque >= placeholder) {
            this.qntTanque -= placeholder;
            console.log(`Andando por ${distancia.toFixed(2)}Km...`);
            console.log(`Consumo de: ${placeholder.toFixed(2)} litros`);
            console.log(`Restam no tanque ${this.qntTanque.toFixed(2)} litros`);
        }
        else {
            console.log("Não há combustivel suficiente");
        }
    }
    adicionarGasolina(qnt) {
        this.qntTanque = qnt;
        console.log(`Foi adicionado ao tanque ${qnt} litros de combustivel`);
    }
    obterGasolina() {
        console.log(`Tanque: ${this.qntTanque}`);
    }
}
exports.default = Carro;
