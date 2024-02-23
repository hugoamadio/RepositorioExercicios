// 17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

let eleitores = Number(prompt("Digite o numero de eleitores: "));
let brancos = Number(prompt("Quantos foram brancos: "));
let nulos = Number(prompt("Quantos foram nulos: "));
let validos = eleitores - brancos - nulos;

if((brancos + nulos + validos) <= eleitores){
    document.write(`Votos nulos ${nulos} representam ` + (nulos/eleitores)*100 + "%<br>")
    document.write(`Votos brancos ${brancos} representam ` + (brancos/eleitores)*100 + "%<br>")
    document.write(`Votos validos ${validos} representam ` + (validos/eleitores)*100 + "%<br>")
}