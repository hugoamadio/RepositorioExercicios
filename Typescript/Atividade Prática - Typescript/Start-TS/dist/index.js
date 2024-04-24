"use strict";
function media(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    if (media >= 6) {
        console.log("Aprovado");
        return true;
    }
    else {
        console.log("Reprovado");
        return false;
    }
}
const parametros = {
    nota1: 10,
    peso1: 1,
    nota2: 6,
    peso2: 2,
    nota3: 5,
    peso3: 3
};
function mediaPonderada(notas) {
    const lista1 = ((notas.nota1 * notas.peso1) + (notas.nota2 * notas.peso2)) / 2;
    const lista2 = ((notas.nota1 * notas.peso1) + (notas.nota2 * notas.peso2) + (notas.nota3 * notas.nota3)) / 3;
    console.log(lista1);
    console.log(lista2);
}
const carteira = {
    saldo: 1000,
    entradas: 0,
    saidas: 0
};
function transacoes(carteira, entrada, saida) {
    if (saida > (carteira.saldo + entrada)) {
        console.log("O Saldo será insuficiente com esses lançamentos");
    }
    if (entrada > 0) {
        carteira.saldo += entrada;
    }
    if (saida > 0) {
        carteira.saldo -= saida;
    }
    console.log(`O saldo atual apos os lançamentos é de ${carteira.saldo}`);
}
const produtos = [];
function cadastrar(nome, preco) {
    const prod = {
        nome: nome,
        preco: preco
    };
    produtos.push(prod);
}
function listar() {
    console.log(produtos);
}
function deletar(nomeProduto) {
    const indexProduct = produtos.findIndex(prod => prod.nome == nomeProduto);
    if (indexProduct != -1) {
        produtos.splice(indexProduct, 1);
    }
    else {
        console.log("Produto não existente");
    }
}
const usuario = {
    nome: "Marcos",
    idade: 34,
    ocupacao: "Motorista",
    salario: 2400
};
function showInfo(usuario) {
    if (usuario.salario == null) {
        usuario.salario = 0;
    }
    console.log(`${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, Salario R$ ${usuario.salario}`);
}
const diretor = {
    nome: "Daphne",
    idade: 23,
    nivelComissionamento: 5,
    salario: 1000
};
function showInfoDiretor(usuario) {
    if (usuario.salario == null) {
        usuario.salario = 0;
    }
    console.log(`Diretor(a) ${usuario.nome}, ${usuario.idade} anos, comissão nível ${usuario.nivelComissionamento}, salário R$ ${usuario.salario}`);
}
const lista = [
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
];
lista.forEach(pessoa => {
    if ("nivelComissionamento" in pessoa) {
        showInfoDiretor(pessoa);
    }
    else {
        showInfo(pessoa);
    }
});
