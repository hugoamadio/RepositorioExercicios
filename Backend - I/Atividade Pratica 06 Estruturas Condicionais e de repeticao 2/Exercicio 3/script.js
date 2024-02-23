// 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
// número de 1 a 7 e imprimir no console o dia da Semana. Para este
// exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
// por diante. Caso o número recebido não esteja neste intervalo
// imprimir “Dia não reconhecido”.

let numero = Number(prompt('digite um numero'));

if (numero == 1){
    document.write('Seu numero e Domingo')
}else if(numero == 2){
    document.write('seu numero e segunda')
}else if (numero == 3){
    document.write('seu numero e terca')
}else if (numero == 4){
    document.write (' seu numero e quarta')
}else if( numero == 5){
    document.write('seu numero e quinta')
}else if(numero == 6){
    document.write('seu numero e sexta')
}else if(numero == 7){
    document.write('seu numero e sabado')
}else{
    document.write('Número inválido, digite de 1 a 7.')
}
