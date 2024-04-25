"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome, preco, ativo = true, estoque = 0) {
        this.id = new Date().getTime();
        this.nome = nome;
        this.preco = preco;
        this.ativo = ativo;
        this.estoque = estoque;
    }
    desativar() {
        this.ativo = false;
        console.log("Produto desativado com sucesso.");
    }
    ativar() {
        this.ativo = true;
        console.log("Produto ativado com sucesso.");
    }
    imprimir() {
        console.log(`Id: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco}`);
        console.log(`Ativo: ${this.ativo ? "Sim" : "Não"}`);
        console.log(`Estoque: ${this.estoque}`);
    }
    alterarPreco(novoPreco) {
        this.preco = novoPreco;
    }
    aumentar() {
        this.estoque++;
    }
    diminuir() {
        if (this.estoque < 1) {
            console.log("Não é possivel diminuir o estoque");
        }
        else {
            this.estoque--;
            console.log("Estoque alterado!!");
        }
    }
    aumentarPorQuantidade(qnt) {
        this.estoque += qnt;
    }
    diminuirQuantidade(qnt) {
        if (this.estoque < qnt) {
            console.log("Não é possivel diminuir o estoque");
        }
        else {
            this.estoque -= qnt;
            console.log("Estoque alterado!!");
        }
    }
}
exports.default = Produto;
