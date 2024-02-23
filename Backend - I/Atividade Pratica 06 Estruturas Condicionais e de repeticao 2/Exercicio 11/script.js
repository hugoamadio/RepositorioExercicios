// 11. Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

let turno = prompt('Digite a primeira letra  do turno em que voce estuda ')

switch (turno) {
    case 'm' :
        alert('seu turno e Manha')
        break;
    case 'v' :
        alert('seu turno e Vesperino')
        break;
    case 'n' :
        alert('seu turno e Noite')
        break;
    default:
        alert ('digite corretamente a primeira letra ')
        break;
}