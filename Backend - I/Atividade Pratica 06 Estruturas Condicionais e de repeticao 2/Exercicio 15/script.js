// 15. Crie um algoritmo que armazene três valores, para cada um dos
// lados de um triângulo: A, B e C. Verifique se os lados fornecidos
// formam realmente um triângulo. Se formar, deve mostrar no console
// o tipo de triângulo: isósceles, escaleno ou equilátero.

// a. Para verificar se os lados fornecidos formam um triângulo: A <
// B + C e B < A + C e C < A + B.

// b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
// B=C);

// c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
// B<>C e A<>C);

// d. Triângulo equilátero: possui todos os lados iguais (A=B e
// B=C);

let a = Number(prompt("digite o valor a: "));
let b = Number(prompt("digite o valor b: "));
let c = Number(prompt("digite o valor c: "));

if(a < b + c && b < a + c && c < a + b){
    document.write("É um triangulo<br>")

    if(a != b || a == c || b == c){
        document.write("Triângulo isósceles")
    }else if(a != b && b != c && a != c){
        document.write("Triângulo escaleno")
    }else if(a == b && b == c && c == a){
        document.write("Triângulo equilátero")
    }
}