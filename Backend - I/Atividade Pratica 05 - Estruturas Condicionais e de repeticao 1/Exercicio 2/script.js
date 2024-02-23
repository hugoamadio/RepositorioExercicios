// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let contador = 0;
let somaSalarioF = 0;
let somaSalarioM = 0;
while(contador !== 1){
    let salario = Number(prompt("digite o salário do funcionário: "));
    let sexo = String(prompt("Digite o sexo do funcionário(M ou F): "));
    let continuar = String(prompt("Deseja continuar?(S ou N): "));
    if(continuar === "N"){
        contador++
    }
    if(sexo == "M"){
        somaSalarioM = somaSalarioM + salario
    }else{
        somaSalarioF = somaSalarioF + salario
    }

}

document.write(`Salário pago Masculino: ${somaSalarioM}<br>`);
document.write(`Salário pago Feminino: ${somaSalarioF}`);