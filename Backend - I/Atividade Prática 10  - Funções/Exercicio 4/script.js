// . Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.
// Ex:
// Entrada: 3672
// Saída: 1:1:12

let tempo = Number(prompt("Digite o número em segundos"))

function calculaTempo(tempo){
    let hora = Math.floor(tempo/3600)
    let minutos = Math.floor((tempo%3600)/60)
    let segundos = tempo % 60
    console.log(`Hora ${hora}`)
    console.log(`Minutos ${minutos}`)
    console.log(`Segundos ${segundos}`)
}

calculaTempo(tempo)