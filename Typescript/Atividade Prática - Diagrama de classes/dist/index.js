"use strict";
// import Item from "./model/Item";
// import Pedido from "./model/Pedido";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = __importDefault(require("./model/Atividade4/Produto"));
const Pedido_1 = __importDefault(require("./model/Atividade4/Pedido"));
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
const xBurguer = new Produto_1.default('x-Burguer', 32, 'hamburguer, tomate, alface, molho');
const xBurguerBacon = new Produto_1.default('x-burguer bacon', 34, 'hamburguer, tomate, alface, bacon, molho');
const batataIndividual = new Produto_1.default('batata frita individual', 13, '150g de batata frita temperada');
const porcaoDeBatata = new Produto_1.default('porcao de batata frita', 21, '400g de batata frita temperada');
const cocaCola = new Produto_1.default('Coca cola', 6, 'lata');
const guarana = new Produto_1.default('Guaraná', 6, 'lata');
const array = [];
array.push(xBurguer, xBurguer, porcaoDeBatata, cocaCola, cocaCola);
const pedido1 = new Pedido_1.default(2, array);
pedido1.verPedido();
