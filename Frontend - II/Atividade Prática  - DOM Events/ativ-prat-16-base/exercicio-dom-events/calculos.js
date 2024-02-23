/* Desenvolva aqui a rotina */
function calcular() {

const valorBase = parseInt(document.getElementById('valor_base').value)
const ajudaTransporte = parseInt(document.getElementById('valor_transporte').value)
const valorAlimentacao = parseInt(document.getElementById('valor_alimentacao').value)
const receitaTotal = valorBase + ajudaTransporte + valorAlimentacao
document.getElementById('valor_receita').value = receitaTotal


const descontoAutomovel = parseInt(document.getElementById('valor_automovel').value)
const faltas = parseInt(document.getElementById('faltas').value)
const descontosTotal = descontoAutomovel + faltas
document.getElementById('valor_descontos').value = descontosTotal

document.getElementById('valor_total').value = receitaTotal - descontosTotal
}