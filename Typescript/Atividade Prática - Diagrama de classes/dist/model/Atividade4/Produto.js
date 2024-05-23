"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome, preco, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
    alterarNome(novoNome) {
        this.nome = novoNome;
        console.log(`Nome alterado para ${novoNome}`);
    }
    alterarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`Preço alterado para ${novoPreco}`);
    }
    alterarDescricao(novaDescricao) {
        this.descricao = novaDescricao;
        console.log(`Descrição alterada para ${novaDescricao}`);
    }
    consultarProduto() {
        console.log(`Produto: ${this.nome}`);
        console.log(`preço: ${this.preco}`);
        console.log(`Descrição: ${this.descricao}`);
    }
}
exports.default = Produto;
