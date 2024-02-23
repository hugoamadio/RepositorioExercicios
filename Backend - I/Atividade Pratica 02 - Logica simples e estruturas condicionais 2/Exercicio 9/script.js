let velocidade = Number(prompt("Digite a velocidade do carro: "));
multa =  (velocidade - 80) * 5;
if (velocidade > 80 ){
    console.log("Velocidade ultrapassada!!");
    console.log(`Sua multa é de R$${multa}`);
} else {
    console.log("Não tomou multa");
}