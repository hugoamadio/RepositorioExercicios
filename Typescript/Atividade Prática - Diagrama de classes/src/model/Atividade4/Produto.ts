class Produto{
    nome: string
    preco: number
    descricao: string

    constructor(nome: string, preco: number, descricao: string){
        this.nome = nome
        this.preco = preco
        this.descricao = descricao
    }

    alterarNome(novoNome: string){
        this.nome = novoNome
        console.log(`Nome alterado para ${novoNome}`);
    }

    alterarPreco(novoPreco: number){
        this.preco = novoPreco
        console.log(`Preço alterado para ${novoPreco}`);
    }

    alterarDescricao(novaDescricao: string){
        this.descricao = novaDescricao
        console.log(`Descrição alterada para ${novaDescricao}`);   
    }

    consultarProduto(){
        console.log(`Produto: ${this.nome}`);
        console.log(`preço: ${this.preco}`);
        console.log(`Descrição: ${this.descricao}`);
    }
}

export default Produto