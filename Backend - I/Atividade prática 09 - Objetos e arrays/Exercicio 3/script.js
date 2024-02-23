// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

let primeiroAluno = {
    nome: "Henrique",
    nota1: 7.8,
    nota2: 6.0
}

let segundoAluno = {
    nome: "Joaquim",
    nota1: 8.1,
    nota2: 6.0
}

console.log(primeiroAluno,segundoAluno)

console.log(`A média de ${primeiroAluno.nome} é: ${(primeiroAluno.nota1 + primeiroAluno.nota2)/2}`)
console.log(`A média de ${segundoAluno.nome} é: ${(segundoAluno.nota1 + segundoAluno.nota2)/2}`)
console.log(`A média da sala é ${((primeiroAluno.nota1 + primeiroAluno.nota2)/2 + (segundoAluno.nota1 + segundoAluno.nota2)/2)/2}`)