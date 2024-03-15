const urlParams = new URLSearchParams(window.location.search)

var limit = urlParams.get("limit") || 3
var page = urlParams.get("page") || 1

const div = document.getElementById('div-conteudo')
const btnNext = document.getElementById('next-page')
const btnLast = document.getElementById('last-page')


const produtosPaginados = async () => {
    try{
        const response = await api.get(`/produtosPaginados?limit=${limit}&page=${page}`)
        const data = response.data.produtosPaginados
        
        console.log(data)
        data.forEach(produto => {
            const divCriada = document.createElement('div')
            divCriada.innerHTML = `<p>${produto.nome}</p>`
            div.appendChild(divCriada)
        });
        btnLast.disabled = page === 1
        btnNext.disabled = data.length < limit


    }catch(error){
        console.log("Erro Interno! ", error)
    }
}

produtosPaginados()

function nextPage(){
    page++
    div.innerHTML = ''
    produtosPaginados()
}

function lastPage(){
    page--
    div.innerHTML = ''
    produtosPaginados()
}