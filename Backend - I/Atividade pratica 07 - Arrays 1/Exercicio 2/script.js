// 2. Criar um array e percorrê-lo utilizando o loop for of

// a. Crie um array com o nome "numeros" e adicione 5 números de
// sua escolha

// b. Utilize o loop for of para percorrer o array e exibir a soma dos
// números na tela

let numeros =[];
let soma = 0;

for (let index = 0; index < 5; index++) {
    let novoNumero = Number(prompt("Digite um numero para adicionar a lista"))
    numeros.unshift(novoNumero)
}

for (const numero of numeros) {
    soma += numero;
}
document.write(soma);