// // 5. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// // e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// // programa deve mostrar também os nomes na ordem inversa em
// // que o usuário os digitou.
// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson

let listaNomes = [];

for (let index = 0; index < 5; index++) {
    let nome = String(prompt("Digite um nome: "));
    listaNomes.push(nome);
}

for (const nome of listaNomes) {
    document.write(nome + " ");
}
document.write("<br>");
document.write("------------------------------<br>");

let tamanhoListaNomes = listaNomes.length
for (let index = tamanhoListaNomes -1; index >= 0; index--) {
    document.write(listaNomes[index] + ' ');
}