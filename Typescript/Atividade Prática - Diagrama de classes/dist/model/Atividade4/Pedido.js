"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pedido {
    constructor(qntPessoas, produtos) {
        this.idPedido = Date.now();
        this.qntdPessoas = qntPessoas;
        this.produtos = produtos;
    }
    verPedido() {
        console.log(`O pedido ${this.idPedido} tem ${this.produtos.length} produtos!!`);
        console.log(`${this.produtos.forEach(produto => console.log(`${produto.nome} custa ${produto.preco}. Descrição: ${produto.descricao}`))}`);
    }
}
exports.default = Pedido;
