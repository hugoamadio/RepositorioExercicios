"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animal_model_1 = __importDefault(require("./model/animal.model"));
const produto_model_1 = __importDefault(require("./model/produto.model"));
const animal1 = new animal_model_1.default("Réptil", 4, true);
const animal2 = new animal_model_1.default("Canino", 4, true, "Cachorro");
const produto1 = new produto_model_1.default("Caneta", 3);
const produto2 = new produto_model_1.default("Lapis Velho", 0, false);
const produto3 = new produto_model_1.default("capacete", 100, true, 37);
function ativarProduto(produtoParametro) {
    if (produtoParametro.ativo) {
        console.log("OPS! Produto já está ativo.");
    }
    else {
        produtoParametro.ativar();
    }
}
ativarProduto(produto2);
console.log("---------------------------------");
produto2.alterarPreco(12);
produto1.alterarPreco(25);
console.log("---------------------------------");
produto1.imprimir();
console.log("---------------------------------");
produto2.imprimir();
console.log("---------------------------------");
// produto1.aumentarPorQuantidade(100)
produto3.imprimir();
produto3.diminuirQuantidade(39);
produto3.imprimir();
