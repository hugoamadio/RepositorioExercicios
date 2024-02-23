// 18. Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:

// avista 2.5%
// 2x até 5x preço de tabela sem desconto
// 6x até 10x juros de 6% sobre o preço da tabela
// 11x até 15x juros de 13% sobre o preço da tabela

// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.


let valor = Number(prompt("Digite o valor da compra: "));
let qntParcelas = Number(prompt("Quantas parcelas? "));
let valorParcela = valor/qntParcelas;


if(qntParcelas < 1 || qntParcelas > 15){
    document.write("Número de parcelas invalidas")
}else{
    if(qntParcelas == 1){
        document.write(`Valor total de R$${valor*0.975}`);
    }else if(qntParcelas > 1 && qntParcelas <= 5){
        document.write(`Parcela de R$${valorParcela} em ${qntParcelas}x`);
    }else if(qntParcelas >=6 && qntParcelas <= 10){
        document.write(`Parcela de R$${valorParcela * 1.06} em ${qntParcelas}x`);
    }else{
        document.write(`Parcela de R$${valorParcela * 1.13} em ${qntParcelas}x`);
    }
}

