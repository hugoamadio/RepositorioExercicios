// 2. Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.


let idade = Number(prompt("Digite a idade: "))

if(idade >= 18){
    let habilitado = prompt("É habilitado? Sim ou não ");
    if(habilitado =='sim'){
        console.log("Pode dirigir");
    }else{
        console.log("Não pode dirigir");
    }
}else{
    console.log("Não pode dirigir")
}