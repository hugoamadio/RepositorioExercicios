import { Consulta, Medico, Paciente, Tratamento } from "./model";
import Hospital from "./model/Hospital";

const hospital = new Hospital()
const paciente1 = new Paciente({nome: "Marcos",idade: 35})
const medico1 = new Medico({nome: "Dr. Silva",especialidade: "Cardiologista"})

hospital.adicionarPaciente(paciente1)
hospital.adicionarMedico(medico1)

const tratamento1 = new Tratamento({descricao: "Tratamento de hipertensão", custo: 1700})
const consulta1 = new Consulta({medico: medico1, paciente: paciente1, data: Date(), tratamento: tratamento1})
const consulta2 = hospital.criarConsulta({medico: medico1, paciente: paciente1, data: Date(), tratamento: tratamento1})

consulta1.adicionarTratamento(tratamento1)

hospital.listarPaciente()
hospital.listarMedico()