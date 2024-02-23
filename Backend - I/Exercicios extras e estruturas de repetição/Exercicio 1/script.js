// Peça um número para a pessoa usuária , e imprima os números
// que são pares dentro do intervalo de 0 até o número inserido pela a
// pessoa usuária.

// Refatore o programa, e adicione a impressão dos números
// pares que são maiores que 25 ou menores que 75


let N = Number(prompt("Digite um número N"));
let atual = 0;
while(atual <= N){
    if((atual % 2) === 0){
        console.log(atual)
    }
    atual++
}

console.log("---------------------------------------------------------------");

atual = 0;
while(atual <= N){
    if((atual % 2) === 0){
        if(atual > 25 && atual < 75){
            console.log(atual)
        }
    }
    atual++
}