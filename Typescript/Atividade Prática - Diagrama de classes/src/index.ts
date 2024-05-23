// import Item from "./model/Item";
// import Pedido from "./model/Pedido";

import Produto from "./model/Atividade4/Produto";
import Pedido from "./model/Atividade4/Pedido";
import Cachorro from "./model/Cachorro";
import Cavalo from "./model/Cavalo";
import Circulo from "./model/Circulo";
import Gato from "./model/Gato";
// import Pedido from "./model/Pedido";
import Retangulo from "./model/Retangulo";

// const tesoura = new Item(7.5, "tesoura", "Esse item é uma tesoura")
// const estojo = new Item(10.50, "estojo", "Este item é um estojo")
// const lapis = new Item(3, "lápis", "Este item é um lápis")

// const itensPedido1 = []
// itensPedido1.push(tesoura, estojo, lapis)

// const pedido1 = new Pedido(itensPedido1, 7.5)

// console.log(pedido1);


// const circulo = new Circulo(10)
// circulo.desenhar()
// circulo.redimensionar()

// const retangulo = new Retangulo(15,5)
// retangulo.desenhar()
// retangulo.redimensionar()

// const cavalo = new Cavalo("potro", 4, true)
// cavalo.andar()
// cavalo.beberAgua()
// cavalo.comerCapim()
// cavalo.emitirSom()

// const gato = new Gato("persa", 4, true)
// gato.andar()
// gato.beberAgua()
// gato.brincar()
// gato.emitirSom()

// const cachorro = new Cachorro('vira lata', 4, true)
// cachorro.andar()
// cachorro.beberAgua()
// cachorro.emitirSom()
// cachorro.rolar()

const xBurguer = new Produto('x-Burguer', 32, 'hamburguer, tomate, alface, molho')
const xBurguerBacon = new Produto('x-burguer bacon', 34, 'hamburguer, tomate, alface, bacon, molho')
const batataIndividual = new Produto('batata frita individual', 13, '150g de batata frita temperada')
const porcaoDeBatata = new Produto('porcao de batata frita', 21, '400g de batata frita temperada')
const cocaCola = new Produto('Coca cola', 6, 'lata')
const guarana = new Produto('Guaraná', 6, 'lata')

const array: Produto[] = []
array.push(xBurguer,xBurguer,porcaoDeBatata,cocaCola,cocaCola)

const pedido1 = new Pedido(2,array)
pedido1.verPedido()