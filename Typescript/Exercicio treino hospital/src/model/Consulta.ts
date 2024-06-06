import { ConsultaType, TratamentoType } from "../types"
import Medico from "./Medico"
import Paciente from "./Paciente"
import Tratamento from "./Tratamento"

class Consulta{
    paciente: Paciente
    medico: Medico
    data: Date
    tratamento?: Tratamento

    constructor(consulta: ConsultaType){
        this.paciente = consulta.paciente
        this.medico = consulta.medico
        this.data = consulta.data ? new Date(consulta.data) : new Date()
        if(consulta.tratamento){
            this.tratamento = consulta.tratamento
        }
    
    }

    adicionarTratamento(tratamento: TratamentoType){
        return this.tratamento = tratamento
    }

    detalhesConsulta(){
        return console.log(Consulta)
    }

}

export default Consulta