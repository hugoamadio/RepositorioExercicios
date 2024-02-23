// 10. Tendo como entrada a altura e o sexo (codificado da seguinte
//     forma: 1 para sexo feminino e 2 para sexo masculino) de uma
//     pessoa, construa um programa que calcule e mostre seu peso ideal,
//     utilizando as seguintes fórmulas:
//     - para homens: (72.7 * Altura) – 58
//     - para mulheres: (62.1 * Altura) – 44.7


let sexo = Number(prompt("1- Feminino e 2 - Masculino: "));
let altura = Number(prompt("Digite a altura"));
let alturaM = (72.7 * altura)-58;
let alturaF = (62.1 * altura)-44.7;

if(sexo === 1){
    document.write("Seu peso ideal é: " + alturaF.toFixed(2))
} else {
    document.write("Seu peso ideal é: " + alturaM.toFixed(2))
}