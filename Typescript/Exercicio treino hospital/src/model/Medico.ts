import { ConsultaType } from "../types"
import MedicoType from "../types/MedicoType"
import Consulta from "./Consulta"

class Medico{
    nome: string
    especialidade: string
    consultas: ConsultaType[] = []

    constructor(medico: MedicoType){
        this.nome = medico.nome
        this.especialidade = medico.especialidade
    }

    adicionarConsulta(consulta: ConsultaType){
        return this.consultas.push(consulta)
    }

    listarConsulta(){
        return console.log(this.consultas)
    }
}

export default Medico