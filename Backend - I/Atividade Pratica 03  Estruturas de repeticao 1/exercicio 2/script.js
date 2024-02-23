// Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro

let alturaPedro = 150;
let alturaLucas = 110;
contagemAnos = 0;
contagemAnosB = 0;


while(alturaLucas != alturaPedro){
    contagemAnos++
    alturaPedro = alturaPedro + 2;
    alturaLucas = alturaLucas + 3;
}

alturaLucas = 110;
alturaPedro = 150;

while(alturaLucas <= alturaPedro){
    contagemAnosB++
    alturaPedro = alturaPedro + 2;
    alturaLucas = alturaLucas + 3;
}

console.log(`Após ${contagemAnos} anos, Lucas e Pedro tem a mesma altura`);
console.log(`Após ${contagemAnosB} Lucas é maior que Pedro por ${alturaLucas - alturaPedro} centimetros`);