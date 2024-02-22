// Capture, armazene e manipule todos os elementos de classe "card".
// Modifique os estilos necessários nesses elementos para que fique
// semelhante a imagem.

let card = document.getElementsByClassName('card')
for (let i = 0; i < card.length; i++) {
    card[i].style.background = 'orange'
}

let btnEditar = document.getElementsByClassName('botao-editar')
for (let i = 0; i < btnEditar.length; i++) {
    btnEditar[i].style.background = 'green'
    btnEditar[i].style.borderStyle = 'none'
    btnEditar[i].style.padding = '7px'
    btnEditar[i].style.borderRadius = '5px'
    btnEditar[i].style.color = 'white'
    btnEditar[i].setAttribute('onclick', 'editarCard()')
}

let btnApagar = document.getElementsByClassName('botao-apagar')
for (let i = 0; i < btnEditar.length; i++) {
    btnApagar[i].style.background = 'red'
    btnApagar[i].style.borderStyle = 'none'
    btnApagar[i].style.padding = '7px'
    btnApagar[i].style.borderRadius = '5px'
    btnApagar[i].style.color = 'white'
    btnApagar[i].setAttribute('onclick', 'apagarCard()')
}

let titulo = document.getElementsByClassName('titulo-card')
for (let i = 0; i < titulo.length; i++) {
    titulo[i].style.color = '#2b385b'
    titulo[i].textContent = 'Meu Card'
}

let descricaoCard = document.getElementsByClassName('descricao-card')
for (let i = 0; i < descricaoCard.length; i++) {
    descricaoCard[i].textContent = 'Descrição modificada pelo JavaScript'
    descricaoCard[i].style.color = "white"
    descricaoCard[i].style.fontSize = "small"
    descricaoCard[i].style.marginTop = "7vh"
    descricaoCard[i].style.marginBottom = "7vh"
}

const editarCard = () => {
    alert("teste")
}

const apagarCard = () => {
    alert("teste denovo")
}