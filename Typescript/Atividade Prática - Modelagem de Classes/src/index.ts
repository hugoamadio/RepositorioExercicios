import Bola from "./model/Bola";
import BombaCombustivel from "./model/BombaCombustivel";
import Calculadora from "./model/Calculadora";
import Carro from "./model/Carro";
import Conta from "./model/Conta";
import Contador from "./model/Contador";

const contagem = new Contador

const bola = new Bola("preta", 30, "Plastico")

const conta = new Conta(105060, "Jorge Benjor", 500)

const calc = new Calculadora()

const bombaGasolina = new BombaCombustivel("gasolina", 5.39, 250)
const bombaAlcool = new BombaCombustivel("Alcool", 3.51, 150)

const meuFusca = new Carro(11)
