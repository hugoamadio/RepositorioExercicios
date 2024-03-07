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
            .json({ msg: "Produto Cadastrado Com Sucesso!", produto: novoProduto })
    } else {
        res
            .status(400)
            .json({ msg: "O nome ou preço do produto é inválido" })
    }
})


app.get('/produtos', (req, res) => {
    if (listaProdutos.length > 0) {
        res.json({ produtos: listaProdutos })
    } else {
        res.json({ msg: "lista vazia" })
    }

})

app.put('/produtos/:nomeProduto', (req, res) => {
    let data = req.body
    let nomeProduto = req.params.nomeProduto
    let newName = data.newName
    let newPrice = data.newPrice

    try {
        let indexProduct = listaProdutos.findIndex(product => product.nome == nomeProduto)
        if (indexProduct != -1) {
            const novoProduto = {
                nome: newName,
                preco: newPrice
            }
            listaProdutos[indexProduct] = novoProduto
            return res
                .status(200)
                .json({ msg: "Produto alterado com sucesso", produto: listaProdutos[indexProduct] })
        } else {
            return res
                .status(400)
                .json({ msg: "Produto não existe" })
        }
    } catch (error) {
        return res
            .status(500)
            .json({ msg: "Erro no servidor" })
    }

})

app.delete('/produtos/:nomeProduto', (req, res) => {
    let nomeProduto = req.params.nomeProduto

    try{
        let indexProduct = listaProdutos.findIndex(produto => produto.nome == nomeProduto)
        if(indexProduct != -1){
            listaProdutos.splice(indexProduct, 1)
            return res
            .status(200)
            .json({msg: "Produto excluido com sucesso"})
        } else {
            return res
            .status(400)
            .json({msg: "Produto não encontrado"})
        }
    }catch (error){
        return res
        .status(500)
        .json({msg: "Erro no servidor"})
    }

})