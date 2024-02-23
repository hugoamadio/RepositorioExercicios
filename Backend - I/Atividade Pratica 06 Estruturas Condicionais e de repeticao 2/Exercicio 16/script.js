// 16. Escreva um algoritmo que armazene o ano atual e o ano de
// nascimento de uma pessoa. Escrever uma mensagem no console
// que diga se ela poderá ou não votar este ano (não é necessário
// considerar o mês em que a pessoa nasceu).

let anoAtual = 2023;
let anoPessoa = Number(prompt("digite o ano em que nasceu: "));

if((anoAtual - anoPessoa) >= 16){
    document.write("Você pode votar!! Você tem " + (anoAtual - anoPessoa) + " anos")
}else{
    document.write("Você não pode votar!!" + (anoAtual - anoPessoa) + " anos")
}