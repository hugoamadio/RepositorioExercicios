let nomeProduto
let precoProduto
let listaProdutos = []

if (listaProdutos.length > 0) {
    for (let i = 0; i < listaProdutos.length; i++) {
        console.log(listaProdutos[i].nomeProduto)
        console.log(listaProdutos[i].precoProduto)
    }
} else {
    console.log("Estoque vazio, cadastre produtos!!")
}

let novoProduto = {
    nomeProduto: "Panela",
    precoProduto: 30
}

if (novoProduto.nomeProduto && novoProduto.precoProduto) {
    listaProdutos.push(novoProduto)
} else {
    console.log("Erro : Nome e preço são obrigatórios")
}

let nomeProdutoAtualizar = "Panela"
let novoNomeProduto = "Frigideira"
let novoPreco = 75

let index = listaProdutos.findIndex(produto => produto.nomeProduto === nomeProdutoAtualizar)
console.log(index)
listaProdutos[index].nomeProduto = novoNomeProduto
listaProdutos[index].precoProduto = novoPreco

listaProdutos.forEach(element => {
    console.log(element)
});