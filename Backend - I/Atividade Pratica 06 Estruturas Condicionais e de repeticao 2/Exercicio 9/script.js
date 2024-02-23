// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.

let numero = Number(prompt("digite um número: "));

if(numero % 2 === 0){
    document.write(`Seu número ${numero} é primo`)
} else{
    document.write(`Seu número ${numero} não é primo`)
}