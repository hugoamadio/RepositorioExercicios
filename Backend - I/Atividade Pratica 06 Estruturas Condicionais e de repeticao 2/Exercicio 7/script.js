// 7. Utilizando do...while, imprima na tela a soma de todos os números
// entre 10 e 100.

let soma = 0;
let numero = 10;

do{
    soma+= numero;
    numero+= 1;
    if(soma < 100){
        document.write(soma+"<br>");
    }
}while(soma <= 100)

