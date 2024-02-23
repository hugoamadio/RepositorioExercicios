// 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).

let n1 = Number(prompt("Digite a primeira nota"))
let n2 = Number(prompt("Digite a segunda nota"))
let n3 = Number(prompt("Digite a terceira nota"))
let qualMedia = prompt("Digite A para média aritmética ou P para média ponderada")

function verificaECalcula(n1, n2, n3, qualMedia) {
    if (qualMedia == "a" || qualMedia == "A") {
        let mediaAritmetica = (n1 + n2 + n3) / 3
        return mediaAritmetica
    } else {
        let mediaPonderada = (5 * n1 + 3 * n2 + 2 * n3) / 10
        return mediaPonderada
    }
}

console.log(verificaECalcula(n1,n2,n3,qualMedia))