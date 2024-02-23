// Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.

for (let index = 1; index <= 250; index++) {
    if((index % 3) == 0){
        console.log(`O número ${index} é multiplo de 3`)
    }

    if((index % 5) == 0){
        console.log(`O número ${index} é multiplo de 5`)
    }
}
