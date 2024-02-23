// . Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto
// b. Mulheres ganham 13% de desconto

let nome = String(prompt("Digite o nome: "));
let valor = Number(prompt("Digite o valor da compra: "));
let sexo = String(prompt("Digite o sexo(F ou M): "));

if(sexo === "M" || sexo === "m"){
    document.write(`${nome} ganhou 5% de desconto e ira pagar ${valor*0.95}`);
} else {
    document.write(`${nome} ganhou 13% de desconto e ira pagar ${valor*0.87}`);
}