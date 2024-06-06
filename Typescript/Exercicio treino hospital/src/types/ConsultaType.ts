import { Medico, Paciente, Tratamento } from "../model"

interface ConsultaType{
    paciente: Paciente
    medico: Medico
    data?: string | Date
    tratamento?: Tratamento
}

export default ConsultaType