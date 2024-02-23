// Escreva um algoritmo que faça a tabuada de um número e
// apresente o resultado de acordo com o modelo a seguir, sabendo
// que o multiplicando deverá ser fornecido pelo usuário (n) e a
// quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ...

let n = Number(prompt("Digite o número a ser multiplicado: "));

let interacao = Number(prompt("Digite o número de interações: "));

for (let index = 1; index < interacao; index++) {
    let valor = index * n;
    console.log(`${index} * ${n} = ${valor}`);
}