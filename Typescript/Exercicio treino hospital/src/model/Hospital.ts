import { consultaDB } from "../database/consulta.db";
import { medicoDB } from "../database/medico.db";
import { pacienteDB } from "../database/paciente.db";
import { ConsultaType, MedicoType, PacienteType } from "../types";

class Hospital{
    pacientes: PacienteType[] = pacienteDB
    medicos: MedicoType[] = medicoDB
    consultas: ConsultaType[] = consultaDB

    adicionarPaciente(paciente: PacienteType){
        return this.pacientes.push(paciente)
    }

    removerPaciente(paciente: PacienteType){
        const index = pacienteDB.findIndex(item => item.nome === paciente.nome)
        if(index !== -1){
            return pacienteDB.splice(index,1)
        } else {
            return console.log("Paciente não encontrado...")
        }
    }

    listarPaciente(){
        return console.log(pacienteDB)
    }

    adicionarMedico(medico: MedicoType){
        return this.medicos.push(medico)
    }

    removerMedico(medico: MedicoType){
        const index = medicoDB.findIndex(item => item.nome === medico.nome)
        if(index !== -1){
            return medicoDB.splice(index, 1)
        } else {
            return console.log("Medico não encontrado...")
        }
    }

    listarMedico(){
        return console.log(medicoDB)
    }

    criarConsulta(consulta: ConsultaType){
        return consultaDB.push(consulta)
    }
}

export default Hospital