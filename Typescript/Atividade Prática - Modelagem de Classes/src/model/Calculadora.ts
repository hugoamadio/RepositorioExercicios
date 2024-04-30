class Calculadora {
    historico: string

    constructor(historico = ""){
        this.historico = historico
    }

    soma(n1:number, n2:number){
        console.log(`${n1 + n2}`);
        this.historico = `Operação: SOMA - Resultado: ${n1 + n2}`
    }

    subtração(n1:number, n2:number){
        console.log(`${n1 - n2}`);
        this.historico = `Operação: SUBTRAÇÃO - Resultado: ${n1 - n2}`
    }

    multiplicacao(n1:number, n2:number){
        console.log(`${n1 * n2}`);
        this.historico = `Operação: MULTIPLICAÇÃO - Resultado: ${n1 * n2}`
    }

    divisao(n1:number, n2:number){
        console.log(`${n1 / n2}`);
        this.historico = `Operação: DIVISÃO - Resultado: ${n1 / n2}`
    }

    visualizarHistorico(){
        console.log(this.historico);       
    }
}

export default Calculadora