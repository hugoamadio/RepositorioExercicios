// 1. Criar um array e percorrê-lo utilizando o loop for

// a. Crie um array com o nome "nomes" e adicione 4 nomes de
// pessoas que você conhece

// b. Utilize o loop for para percorrer o array e exibir os nomes na
// tela

let nomes =[];

for (let index = 0; index < 4; index++) {
    let novoNome = String(prompt("Digite um nome para adicionar a lista"))
    nomes.push(novoNome)
}


for (const nome of nomes) {
    console.log(`${nome}`)
    contador++
}