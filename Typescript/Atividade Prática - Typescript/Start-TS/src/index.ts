function media(nota1: number, nota2: number){
    const media = (nota1+nota2)/2
    if(media>=6){
        console.log("Aprovado")
        return true
    } else {
        console.log("Reprovado");
        return false
    }
}

// media(5,6)

interface Objeto {
    nota1: number,
    peso1: number,
    nota2: number,
    peso2: number,
    nota3: number,
    peso3: number
}

const parametros:Objeto = {
    nota1: 10,
    peso1: 1,
    nota2: 6,
    peso2: 2,
    nota3: 5,
    peso3: 3
}

function mediaPonderada(notas:Objeto){
    const lista1 = ((notas.nota1*notas.peso1) + (notas.nota2*notas.peso2))/2
    const lista2 = ((notas.nota1*notas.peso1) + (notas.nota2*notas.peso2)+(notas.nota3*notas.nota3))/3

    console.log(lista1)
    console.log(lista2)
    
}

// mediaPonderada(parametros)

interface Carteira {
    saldo: number,
    entradas: number,
    saidas: number
}

const carteira:Carteira = {
    saldo: 1000,
    entradas: 0,
    saidas: 0
}

function transacoes(carteira:Carteira, entrada:number, saida:number){
    if(saida > (carteira.saldo + entrada)){
        console.log("O Saldo será insuficiente com esses lançamentos");
    }
    if(entrada > 0){
        carteira.saldo += entrada
    }
    if(saida > 0){
        carteira.saldo -= saida
    }
    console.log(`O saldo atual apos os lançamentos é de ${carteira.saldo}`);
}

// transacoes(carteira, 100, 500)


// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.

type Produto = {
    nome: string,
    preco: number
}

const produtos:Produto[] = []

function cadastrar(nome: string, preco: number){
    const prod = {
        nome: nome,
        preco: preco
    }
    produtos.push(prod)
}

function listar(){
    console.log(produtos)
}

function deletar(nomeProduto: string){
    const indexProduct = produtos.findIndex(prod => prod.nome == nomeProduto)
    if(indexProduct != -1){
        produtos.splice(indexProduct, 1)
    }else{
        console.log("Produto não existente");
    }
}

// cadastrar("abacaxi", 5)
// cadastrar("banana", 10)
// cadastrar("maça", 7)
// cadastrar("abacate", 9)
// listar()
// deletar("abacate")
// listar()


// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”

type User = {
    nome: string,
    idade: number,
    ocupacao: string,
    salario: number
}

const usuario:User = {
    nome: "Marcos",
    idade: 34,
    ocupacao: "Motorista",
    salario: 2400
}

function showInfo(usuario: User){
    if(usuario.salario == null){
        usuario.salario = 0
    }
    console.log(`${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, Salario R$ ${usuario.salario}`);
}

// showInfo(usuario)

// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”

type UserDir = {
    nome: string,
    idade: number,
    salario: number,
    nivelComissionamento: number
}

const diretor:UserDir = {
    nome: "Daphne",
    idade: 23,
    nivelComissionamento: 5,
    salario: 1000
}

function showInfoDiretor(usuario: UserDir){
    if(usuario.salario == null){
        usuario.salario = 0
    }
    console.log(`Diretor(a) ${usuario.nome}, ${usuario.idade} anos, comissão nível ${usuario.nivelComissionamento}, salário R$ ${usuario.salario}`);
}

// showInfoDiretor(diretor)

// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.

type Composto = User | UserDir;

const lista:Composto[] = [
    {
        nome: "Daphne",
        idade: 23,
        nivelComissionamento: 5,
        salario: 1000
    },
    {
        nome: "Marcos",
        idade: 34,
        ocupacao: "Motorista",
        salario: 2400
    }
]

lista.forEach(pessoa => {
    if("nivelComissionamento" in pessoa){
        showInfoDiretor(pessoa)
    } else {
        showInfo(pessoa)
    }
});