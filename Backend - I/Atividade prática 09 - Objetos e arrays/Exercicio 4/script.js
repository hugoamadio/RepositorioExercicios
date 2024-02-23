// 4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando

// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

let desempregadas = []
let empregadasmaior = []
let empregadasmenor = []

let pararCadastro = true

function cadastro() {
    var nome = String(prompt("Digite o nome"))
    var idade = Number(prompt("Digite a idade"))
    var trabalhando = confirm(`${nome} está trabalhando?`)
    if(trabalhando){
        var salario = Number(prompt("Digite o Salário"))
        if(salario>2500){
            empregadasmaior.push(pessoa = {nome: nome, idade: idade, salario: salario})
        } else {
            empregadasmenor.push(pessoa = {nome: nome, idade: idade, salario: salario})
        }
    } else {
        desempregadas.push(pessoa = {nome: nome, idade: idade})
    }
}

while(pararCadastro){
    cadastro()
    pararCadastro = confirm("Deseja continuar cadastrando?")
}

console.log("Pessoas desempregadas:")
console.log(desempregadas)
console.log("Pessoas empregadas com salários menores que 2500:")
console.log(empregadasmenor)
console.log("Pessoas empregadas com salários maiores que 2500:")
console.log(empregadasmaior)