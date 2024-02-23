// . Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.
// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

let valor = Number(prompt("Digite um valor"))

function verificaPerfeito(valor) {
    let compara = 0;
    for (let index = 1; index <= valor; index++) {
        if(valor%index == 0){
            compara += index
            
        }
    }
    if((compara - valor) == valor){
        return true
    } else {
        return false
    }
}

console.log(verificaPerfeito(valor))