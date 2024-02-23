let altura = Number(prompt("Digite sua altura: "));
let peso = Number(prompt("Digite seu peso: "));
let imc = (peso/(altura*altura));
console.log(`Seu imc é ${imc}`);
if (imc<18.5){
    console.log("Você está abaixo da faixa de peso ideal”");
} else if (imc>24.99){
    console.log("Você está acima da faixa de peso ideal”");
} else {
    console.log("Você está dentro da faixa de peso ideal");
}