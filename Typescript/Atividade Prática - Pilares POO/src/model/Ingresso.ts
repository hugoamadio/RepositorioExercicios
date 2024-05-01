abstract class Ingresso {
    valor: number

    constructor(valor: number){
        this.valor = valor
    }

    abstract imprimeValor(): void

}

export default Ingresso