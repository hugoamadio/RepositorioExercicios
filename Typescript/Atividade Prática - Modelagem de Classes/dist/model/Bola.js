"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bola {
    constructor(cor, circunferencia, material) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }
    trocarCor(novaCor) {
        this.cor = novaCor;
    }
    mostrarCor() {
        console.log(this.cor);
    }
}
exports.default = Bola;
