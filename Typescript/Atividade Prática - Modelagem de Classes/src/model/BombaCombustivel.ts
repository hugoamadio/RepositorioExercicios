class BombaCombustivel{
    tipoCombustivel: string
    valorLitro: number
    qntCombustivelBomba: number

    constructor(tipo: string, valorLitro: number, qnt: number){
        this.tipoCombustivel = tipo
        this.valorLitro = valorLitro
        this.qntCombustivelBomba = qnt
    }

    abastecerPorValor(valor:number){
        if(this.qntCombustivelBomba >= (valor/this.valorLitro)){
            console.log(`Foram abastecidos ${(valor/this.valorLitro)} litros de ${this.tipoCombustivel}`);
            this.qntCombustivelBomba -= (valor/this.valorLitro)
            console.log(`Disponivel na bomba: ${this.qntCombustivelBomba}`);
            
        } else {
            console.log("Não foi possivel abastecer pois a bomba não tem essa quantidade de combustivel disponivel");
        }
    }

    abastecerPorQuantidade(qnt:number){
        if(this.qntCombustivelBomba >= qnt){
            console.log(`Foram abastecidos ${qnt} litros de ${this.tipoCombustivel} dando um valor total de ${qnt*this.valorLitro}`);
            this.qntCombustivelBomba -= qnt
            console.log(`Disponivel na bomba: ${this.qntCombustivelBomba}`);
        } else {
            console.log("Não foi possivel abastecer pois a bomba não tem essa quantidade de combustivel disponivel");
        }
    }

    alterarValorDoLitro(novoValor: number){
        this.valorLitro = novoValor
        console.log(`Valor do litro de ${this.tipoCombustivel} alterado para ${this.valorLitro}`);
    }

    alterarQtdBomba(novaQtd: number){
        this.qntCombustivelBomba = novaQtd
        console.log(`Nova quantidade disponivel na bomba de ${this.tipoCombustivel} é de ${this.qntCombustivelBomba}`);
        
    }
}

export default BombaCombustivel