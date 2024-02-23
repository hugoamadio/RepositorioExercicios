// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!


let valorInicio = Number(prompt("digite o valor inicial"));
let valorFinal = Number(prompt("digite o valor de parada"));
let incremento = Number(prompt("digite o incremento"));

console.log("Contagem: ")

while(valorFinal != valorInicio ){
    valorInicio = valorInicio + incremento
    console.log(`${valorInicio}`)
    if(valorInicio > valorFinal){
        valorInicio = valorFinal;
    }
}

console.log("Acabou!")