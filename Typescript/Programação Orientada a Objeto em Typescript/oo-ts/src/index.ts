import Animal from "./model/animal.model";
import Produto from "./model/produto.model";

const animal1 = new Animal("Réptil", 4, true);
const animal2 = new Animal("Canino", 4, true, "Cachorro");

const produto1 = new Produto("Caneta", 3);

const produto2 = new Produto("Lapis Velho", 0, false);

const produto3 = new Produto("capacete", 100, true, 37)

function ativarProduto(produtoParametro: Produto) {
  if (produtoParametro.ativo) {
    console.log("OPS! Produto já está ativo.");
  } else {
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
produto3.imprimir()
produto3.diminuirQuantidade(39)
produto3.imprimir()