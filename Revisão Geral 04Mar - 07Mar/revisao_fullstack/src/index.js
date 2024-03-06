import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors());
app.use(express.json())

let listaProdutos = []

app.get('/', (req, res) => {
    return res.json('OK')
})


app.listen(8080, () => console.log("Servidor iniciado na porta 8080"))


app.post('/criar-produto', (req, res) => {
    let data = req.body
    let nome = data.nome
    let preco = data.preco
    if (nome != "" && preco > 0) {
        const novoProduto = {
            nome: nome,
            preco: preco
        }
        listaProdutos.push(novoProduto)
        res
            .status(201)
            .json({msg: "Produto Cadastrado Com Sucesso!", produto: novoProduto})
    } else {
        res
            .status(400)
            .json({msg: "O nome ou preço do produto é inválido"})
    }
})


app.get('/produtos', (req, res) => {
    if (listaProdutos.length > 0) {
        res.json({produtos: listaProdutos})
    } else {
        res.json({msg: "lista vazia"})
    }

})