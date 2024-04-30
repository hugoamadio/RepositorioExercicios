"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(conta, nome, saldo = 0) {
        this.numeroConta = conta;
        this.nomeCorrentista = nome;
        this.saldo = saldo;
    }
    alterarNome(newName) {
        this.nomeCorrentista = newName;
        console.log(`Nome alterado para ${this.nomeCorrentista}`);
    }
    deposito(valorDep) {
        this.saldo += valorDep;
    }
    saque(valorSaq) {
        if (valorSaq > this.saldo) {
            console.log("Não é possivel realizar o saque pois o saldo é insuficiente");
        }
        else {
            this.saldo -= valorSaq;
            console.log("Saque realizado com sucesso!");
        }
    }
    consultarSaldo() {
        console.log(`Saldo da conta: ${this.saldo}`);
    }
}
exports.default = Conta;
