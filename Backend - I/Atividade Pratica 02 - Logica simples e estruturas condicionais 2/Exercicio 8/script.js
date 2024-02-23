let idade = Number(prompt("Digite a idade: "));
let peso = Number(prompt("Digite o peso: "));
if (idade <= 12){
    console.log("Categoria infantil");
} else if(idade > 12 && idade <= 16){
    if(peso <= 40){
        console.log("Categoria juvenil leve")
    } else {
        console.log("Categoria juvenil pesado")
    }
} else if(idade >= 17 && idade <= 24) {
    if(peso <= 45){
        console.log("Categoria sênior leve")
    } else if(peso > 45 && peso <= 60) {
        console.log("Categoria senior medio")
    } else {
        console.log("Categoria senior pesado")
    }
} else {
    console.log("Veterano")
}