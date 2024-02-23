// 1. Considere o seguinte array:
// const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
// 1290.00, 15000.00];
// a. Imprima no console o índice do primeiro salário maior que
// 7.500 utilizando o findIndex
// b. Crie uma nova lista filtrada com os salários que são maior que
// 8.000 utilizando o filter

// const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99,
// 1290.00, 15000.00]
// console.log(salarios.findIndex(salario => salario > 7500))

// let salarioMaior8k = salarios.filter(salario => salario > 8000)
// console.log(salarioMaior8k)






// 2. James estava criando uma array com as cores do arco-íris, e ele
// esqueceu algumas cores. As cores padrão de um arco-íris são
// normalmente listadas nesta ordem:
// const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
// "Roxo"];
// mas James tinha isto:
// const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];
// Usando somente o método splice insira as cores que faltam na array e
// remova a cor "Preto", seguindo estes passos:
// a. Remova "Preto"
// b. Adicione "Amarelo" e "Verde"
// c. Adicione "Roxo


// const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

// rainbow.splice(2,1)
// rainbow.splice(2,0,"Amarelo", "Verde")
// rainbow.splice(5,0,"Roxo")
// document.write(rainbow)



// 3. Crie um cadastro de pessoas onde o usuário informe o nome, idade
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

let pessoa = {}

function cadastro() {
    let armazenaDados = []
    let parada = true
    while (parada) {
        pessoa = {}
        pessoa.nome = prompt("Digite o nome")
        pessoa.idade = prompt("Digite a idade")
        let trabalhando = confirm(`${pessoa.nome} está trabalhando?`)
        if (trabalhando) {
            pessoa.salario = prompt("Digite o salario")
        } else {
            pessoa.salario = 0
        }
        armazenaDados.push(pessoa)
        parada = confirm("Deseja continuar cadastrando?")
    }
    return armazenaDados
}

let armazenaDadosFora = cadastro()
console.log("Pessoas empregadas com salários maiores que 2500:")
let EmpregadasMaior2500 = armazenaDadosFora.filter(pessoa => pessoa.salario > 2500)
console.log(EmpregadasMaior2500)
console.log("Pessoas empregadas com salários menores que 2500:")
let EmpregadasMenor2500 = armazenaDadosFora.filter(pessoa => pessoa.salario > 0 && pessoa.salario < 2500)
console.log(EmpregadasMenor2500)
console.log("Pessoas desempregadas:")
let Desempregadas = armazenaDadosFora.filter(pessoa => pessoa.salario == 0)
console.log(Desempregadas)