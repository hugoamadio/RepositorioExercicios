saldoConta = 700;
valorSaque = Number(prompt("Informe o valor que deseja sacar: "));
tarifa = 4.5;
novoSaldo = saldoConta - tarifa - valorSaque;
if (valorSaque > 0 && valorSaque % 5 == 0){
    console.log("O número é valido")
    if ((saldoConta - tarifa) > valorSaque){
        console.log("Saque realizado com sucesso!!")
        console.log(`Seu novo saldo em conta é de ${novoSaldo}`)
    } else {
        console.log("Saldo insuficiente")
    }
} else {
    console.log("Número invalido")
}