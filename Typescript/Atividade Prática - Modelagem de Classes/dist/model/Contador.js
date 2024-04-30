"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contador {
    constructor(contador = 0) {
        this.contador = contador;
    }
    incrementar() {
        this.contador++;
    }
    imprimir() {
        console.log(this.contador);
    }
    zerar() {
        this.contador = 0;
    }
    decrementar() {
        this.contador--;
    }
}
exports.default = Contador;
