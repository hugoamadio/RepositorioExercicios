import { ConsultaType, PacienteType, historicoType } from "../types"
import Consulta from "./Consulta"

class Paciente{
    nome: string
    idade: number
    historicoConsultas: ConsultaType[] = []

    constructor(paciente: PacienteType){
        this.nome = paciente.nome
        this.idade = paciente.idade
    }

    adicionarConsulta(consulta: ConsultaType){
        this.historicoConsultas.push(consulta)
        return console.log("Consulta adicionada...")        
    }

    listarConsulta(){
        this.historicoConsultas.forEach(item => console.log(item))
    }
}

export default Paciente