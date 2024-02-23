let idade = 26;
document.write("<br>Minha idade é " + idade);
document.write("<hr>");
//----------------------------------------------------------------------
let x = 10;
let y = 20;
let z = x + y;
document.write("<br>O resultado da soma de " + x + " e " + y + " é = " + z);
document.write("<hr>");
//----------------------------------------------------------------------
let total = 149.90;
let parcelas = 3;
let totalDividido = total / parcelas;
document.write("O valor da compra foi R$" + total.toFixed(2));
document.write(`<br>Forma de pagamento: ${parcelas}x de R$${totalDividido.toFixed(2)}`);
document.write("<hr>");
//----------------------------------------------------------------------
let minutos = 120;
let segundos = minutos * 60;
document.write(`${minutos} minutos equivalem a ${segundos} segundos`);
document.write("<hr>");
//----------------------------------------------------------------------
nomeAluno = "João";
n1 = 10;
n2 = 7;
n3 = 8;
notaFinal = (n1 + n2 + n3)/3;
document.write(`O aluno ${nomeAluno} teve a média final ${notaFinal.toFixed(2)} <br>`);
document.write("<hr>");
//----------------------------------------------------------------------
let a = 10;
let b = 20;
let temporaria = a;
a = b;
b = temporaria;
document.write(`A = ${a}<br>B = ${b}`);
document.write("<hr>");
//----------------------------------------------------------------------
brancos = 1030;
nulos = 304;
validos = 18937;
somaVotos = brancos + nulos + validos;
percentualNulos = (nulos / somaVotos) * 100;
percentualBrancos = (brancos / somaVotos) * 100;
percentualValidos = (validos / somaVotos) * 100;
document.write(`O municipío teve um total de ${somaVotos} votos<br>`);
document.write(`Onde ${percentualNulos.toFixed(2)}% foram votos nulos<br>`);
document.write(`${percentualBrancos.toFixed(2)}% foram votos em branco<br>`);
document.write(`${percentualValidos.toFixed(2)}% foram votos válidos<br>`);
document.write("<hr>")
//----------------------------------------------------------------------
valorA = 100;
valorB = 200;
if (valorA > valorB){
    document.write(`O valor ${valorA}(A) é maior que ${valorB}(B).`)
} else if (valorB > valorA){
    document.write(`O valor ${valorB}(B) é maior que ${valorA}(A).`)
} else {
    document.write("Os valores são iguais.")
}
document.write("<hr>")
//----------------------------------------------------------------------
frutasCompradas = 11;
if (frutasCompradas >= 12){
    preco = frutasCompradas * 0.25;
    document.write(`Foram compradas ${frutasCompradas} frutas por R$${preco}`);
} else{
    preco = frutasCompradas * 0.30;
    document.write(`Foram compradas ${frutasCompradas} frutas por R$${preco}`);
}
document.write("<hr>");
//----------------------------------------------------------------------
nome = "Jhenifer";
anoNascimento = 2007;
idade = 2023 - anoNascimento;
document.write(`${nome} tem ${idade} anos.`);
document.write("<hr>");
//----------------------------------------------------------------------
numero = 9;
if (numero % 2 === 0){
    document.write("O número é PAR<br>");
    document.write("<hr>");
} else {
    document.write("O número é IMPAR<br>");
    document.write("<hr>");
}
//----------------------------------------------------------------------
anoAtual = 2023;
if ((anoAtual - anoNascimento) >= 16 ){
    document.write(`${nome} poderá votar.`);
} else {
    document.write(`${nome} não poderá votar.`);
};