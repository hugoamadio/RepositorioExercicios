// 3. Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.

let numero = Number(prompt("Digite um valor inteiro"))

function ePrimo(numero) {
    if (numero <= 1) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}
 console.log(ePrimo())