// 4. Desenvolva um algoritmo que declare uma lista de 10 números e
// solicite um número para o usuário e no final informe se o número
// que o usuário digitou está dentro da lista ou não.

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numeroSolicitado = Number(prompt("Digite um número: "));

let parametro = 0;

for (const numeroLista of lista) {
    if(numeroSolicitado == numeroLista){
        parametro++
    }
}

if(parametro > 0){
    document.write("Seu número está na lista!")
} else {
    document.write("Seu número não está na lista!")
}