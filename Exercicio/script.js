// 1. Imprima no console a quantidade de pessoas Total.
// 2. Imprima no console a quantidade de pessoas pessoas do sexo
// Feminino.
// 3. Imprima no console a soma do salário de todas as pessoas.
// 4. Imprima no console a média do salário de todas as pessoas.
// 5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino
// 6. Imprima no console a média do salário de todas as pessoas do sexo
// Masculino
// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.
// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.
// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".
// 10. Imprima os nomes utilizando o MAP


const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    },
    ];
    


// 1. Imprima no console a quantidade de pessoas Total.
// let somatoria = 0
// data.forEach(pessoa => {
//     somatoria++
// });
// console.log(somatoria)



// 2. Imprima no console a quantidade de pessoas pessoas do sexo
// Feminino.

// let somaFeminino = 0
// data.forEach(pessoa => {
//     if(pessoa.sexo == "F"){
//         somaFeminino++
//     }
// });
// console.log(somaFeminino)


// 3. Imprima no console a soma do salário de todas as pessoas.
// let somaSalario = 0
// data.forEach(pessoa => {
//     somaSalario += pessoa.salario
// });
// console.log(somaSalario)


// 4. Imprima no console a média do salário de todas as pessoas.
// let somaSalario = 0
// let somatoria = 0
// data.forEach(pessoa => {
//     somaSalario += pessoa.salario
// });

// data.forEach(pessoa => {
//     somatoria++
// });

// let media = somaSalario/somatoria
// console.log(`${media.toFixed(2)} é a média de salário`)


// 5. Imprima no console a soma do salário de todos as pessoas do sexo
// Masculino

// let somaSalarioMasculino = 0
// data.forEach(pessoa => {
//     if(pessoa.sexo == "M"){
//         somaSalarioMasculino += pessoa.salario
//     }
// });
// console.log(somaSalarioMasculino.toFixed(2))



// 6. Imprima no console a média do salário de todas as pessoas do sexo
// Masculino

// let somaMasculino = 0
// let somaSalarioMasculino = 0
// data.forEach(pessoa => {
//     if(pessoa.sexo == "M"){
//         somaMasculino++
//         somaSalarioMasculino += pessoa.salario
//     }
// });
// console.log((somaSalarioMasculino/somaMasculino).toFixed(2))


// 7. Utilize a função Some, para descobrir se existe algum salário
// superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
// contrário falso.

// let verificaSalario = data.some(pessoa => pessoa.salario > 7000);
// console.log(verificaSalario);


// 8. Utilize a função findIndex, para descobrir a posição da pessoa de
// nome 'Eva Trindade'.

// let posicao = data.findIndex(pessoa => pessoa.nome === "Eva Trindade")
// console.log(posicao)



// 9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
// sobrenome "Silva".

// let contagemNomes = data.filter(pessoa => pessoa.nome.includes("Silva"));
// console.log(contagemNomes);



// 10. Imprima os nomes utilizando o MAP

// let array = data.map(pessoa => pessoa.nome)
// console.log(array)