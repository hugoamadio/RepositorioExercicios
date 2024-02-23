// a-) Peça para a pessoa usuária um número , e imprima todos os
// números de 0 até o número solicitado.

// b-) Refatore o programa , para que imprima todos os números de 0
// até o número solicitado exceto os que são múltiplos de 5.

// c-) Reescreva o programa utilizando um laço diferente do que você
// usou anteriormente.


let N = Number(prompt("digite um número"));
let atual = 0;
while(atual <= N){
    if(atual % 5 > 0){
        console.log(atual)
    }
    atual++
}

console.log("---------------------------------------------------------------");

atual = 0;
do {
    if(atual % 5 > 0){
        console.log(atual)
    }
    atual++
} while(atual <= N)

console.log("---------------------------------------------------------------");

atual = 0;
for (let index = 0; index <= N; index++) {
    if(atual % 5 > 0){
        console.log(atual)
    }
    atual++
}