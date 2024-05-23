import Produto from "./Produto"

class Pedido{
    private idPedido:number
    private qntdPessoas: number
    private produtos: Produto[]

    constructor(qntPessoas: number, produtos: Produto[]){
        this.idPedido = Date.now()
        this.qntdPessoas = qntPessoas
        this.produtos = produtos
    }

    verPedido(){
        console.log(`O pedido ${this.idPedido} tem ${this.produtos.length} produtos!!`);
        console.log(`${this.produtos.forEach(produto => console.log(`${produto.nome} custa ${produto.preco}. Descrição: ${produto.descricao}`))}`);
    }
}

export default Pedido