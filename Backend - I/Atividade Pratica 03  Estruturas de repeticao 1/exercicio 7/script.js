// Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.

let soma = 0;
let contador = 1;
let contaPositivo = 0;
let contaNegativo = 0;
let porcentoPositivo;
let porcentoNegativo;
while (contador <= 10) {
    let n = Number(prompt(`Digite o ${contador}° valor`))
    soma = soma + n
    if(n>0){
        contaPositivo++
    } else {
        contaNegativo++
    }
    contador++
}

media = soma/10;
console.log(`A média dos valores é ${media}`);
console.log(`${contaPositivo} números são positivos`);
console.log(`${contaNegativo} números são negativos`);
porcentoNegativo = (contaNegativo/10)*100;
porcentoPositivo = (contaPositivo/10)*100;
console.log(`${porcentoPositivo}% são números positivos`);
console.log(`${porcentoNegativo}% são números negativos`);