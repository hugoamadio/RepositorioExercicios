// 5. Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas

let distancia = Number(prompt("digite a distancia em KM: "));

if(distancia<= 200){
    document.write(`Valor total R$${distancia * 0.50}`)
} else{
    document.write(`Valor total R$${distancia * 0.45}`)
}