// Crie uma função chamada mostrarDobro(num), que recebe um
// parâmetro sendo um número inteiro. Esta função será chamada ao
// abrir a página e mostrará um alerta com o resultado. Exemplo: “O
// dobro do número 5 é 10.”

function mostrarDobro(num){
    document.write(`${num * 2}`)
}

let num = Number(prompt("Digite um número inteiro"))
mostrarDobro(num)