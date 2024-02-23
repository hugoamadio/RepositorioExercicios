// Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

let somaIdade = 0;
let contaAluno = 0;
let idade = 0;
while(idade != 999){
    idade = Number(prompt("Digite a idade do aluno: "));
    somaIdade = (somaIdade + idade)
    console.log(somaIdade)
    contaAluno++
}
let media = somaIdade/contaAluno;
console.log(`Existem ${contaAluno} alunos na sala e a média de idade é ${media}`);