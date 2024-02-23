let n1 = Number(prompt("Digite um número: "));
let n2 = Number(prompt("DIgite outro número: "));
let soma = n1 + n2;
let subtracao = n1 - n2;
let divisao = n1/n2;
let multiplicacao = n1 * n2;
let operacao = String(prompt("Qual a operação deseja fazer: "));
switch (operacao){
    case '+':
        console.log(`A soma dos números é ${soma}`)
        break;
    case '-':
        console.log(`A subtração dos números é ${subtracao}`)
        break;
    case '/':
        console.log(`A subtração dos números é ${divisao}`)
        break;
    case '*':
        console.log(`A multiplicação dos números é ${multiplicacao}`)
        break;
    default:
        console.log("Algo deu errado")

}