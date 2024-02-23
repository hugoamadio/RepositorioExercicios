// 13. Faça um algoritmo que armazene um número e imprima os
// números ímpares entre 1 e o número armazenado.

let numero = Number(prompt("digite um número: "));
let contador = 1;

while(contador <= numero ){
    if(contador % 2 > 0){
        document.write(contador+"<br>")
    }
    contador++
}