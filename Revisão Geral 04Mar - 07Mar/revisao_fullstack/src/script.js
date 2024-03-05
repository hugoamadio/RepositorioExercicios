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

listaProdutos[index].nomeProduto = novoNomeProduto
listaProdutos[index].precoProduto = novoPreco

listaProdutos.forEach(element => {
    console.log(element)
});

function criarProduto() {
    let novoProduto2 = {
        nomeProduto: "Banana",
        precoProduto: 12
    }
    listaProdutos.push(novoProduto2)
}

function lerProduto() {
    listaProdutos.forEach(element => {
        console.log(element)
    });
}

function atualizarProduto(){
    let nomeProdutoAtualizar2 = "Banana"
    let index = listaProdutos.findIndex(element => element.nomeProduto == nomeProdutoAtualizar2)
    if(index != -1){
        listaProdutos[index].nomeProduto = "Maça"
        listaProdutos[index].precoProduto = 5
    } else {
        console.log("Produto a atualizar não encontrado!")
    }

}

function deletarProduto(){
    let nomeProdutoExcluir = "Frigideira"
    let index = listaProdutos.findIndex(element => element.nomeProduto == nomeProdutoExcluir)
    if(index != -1){
        listaProdutos.splice(index, 1)
    } else {
        console.log("Produto a deletar não encontrado!")
    }
}

console.log("----------------------------------------------------------")
criarProduto()
lerProduto()
atualizarProduto()
console.log("----------------------------------------------------------")
deletarProduto()
lerProduto()