// . Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.

let inteiro = Number(prompt("Digite um número inteiro"))

function verifica(inteiro){
    if(inteiro%2 == 0){
        return false
    } else {
        return true
    }
}

console.log(verifica(inteiro))