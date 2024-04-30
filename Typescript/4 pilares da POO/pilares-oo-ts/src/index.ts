import Conta from "./model/Conta";
import ContaKids from "./model/ContaKids";

const minhaConta = new Conta();
minhaConta.deposito(1000);

const contaKids = new ContaKids(minhaConta.retornaNumeroConta(), 20);
contaKids.deposito(1000);

console.log(minhaConta);
console.log(contaKids);
