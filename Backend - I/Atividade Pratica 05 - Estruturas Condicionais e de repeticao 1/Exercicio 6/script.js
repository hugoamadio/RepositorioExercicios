// 6. Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m². O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m² = TERRENO POPULAR
// Entre 100m² e 500m² = TERRENO MASTER
// Acima de 500m² = TERRENO VIP

let largura = Number(prompt("digite a largura do terreno: "));
let comprimento = Number(prompt("Digite o comprimento do terreno: "));
let area = largura * comprimento;

document.write(`Largura ${largura}<br>`)
document.write(`Comprimento ${comprimento}<br>`)
document.write(`Area ${area}<br>`)

if(area < 100){
    document.write("TERRENO POPULAR")
} else if(area >= 100 && area <= 500){
    document.write("TERRENO MASTER")
} else {
    document.write("TERRENO VIP")
}