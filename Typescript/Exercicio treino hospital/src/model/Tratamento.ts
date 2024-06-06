import { TratamentoType } from "../types"

class Tratamento{
    descricao: string
    custo: number

    constructor(tratamento: TratamentoType){
        this.descricao = tratamento.descricao
        this.custo = tratamento.custo
    }
}

export default Tratamento