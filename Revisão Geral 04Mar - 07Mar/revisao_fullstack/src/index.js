import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors());
app.use(express.json())

let listaProdutos = [
    {
        id: 1,
        nome: "Banana",
        preco: 30
    },
    {
        id: 2,
        nome: "Frango",
        preco: 25
    },
    {
        id: 3,
        nome: "Arroz",
        preco: 10
    },
    {
        id: 4,
        nome: "Manga",
        preco: 5
    },
    {
        id: 5,
        nome: "Leite",
        preco: 15
    },
    {
        id: 6,
        nome: "Pão integral",
        preco: 8
    },
    {
        id: 7,
        nome: "Queijo cheddar",
        preco: 20
    },
    {
        id: 8,
        nome: "Espinafre",
        preco: 12
    },
    {
        id: 9,
        nome: "Iogurte natural",
        preco: 18
    },
    {
        id: 10,
        nome: "Tomates",
        preco: 7
    },
    {
        id: 11,
        nome: "Batatas",
        preco: 6
    },
    {
        id: 12,
        nome: "Cenouras",
        preco: 4
    },
    {
        id: 13,
        nome: "Atum enlatado",
        preco: 22
    },
    {
        id: 14,
        nome: "Azeite de oliva",
        preco: 30
    },
    {
        id: 15,
        nome: "Quinoa",
        preco: 35
    },
    {
        id: 16,
        nome: "Maçãs",
        preco: 20
    }
]

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

app.get('/produtosPaginados', (req,res)=>{
    const limit = parseInt(req.query.limit) || 3
    const page = parseInt(req.query.page) || 1
    const posicaoOffset = (page -1) * limit
    const produtosPaginados = listaProdutos.slice(posicaoOffset, posicaoOffset + limit)
    try{
        if(listaProdutos.length === 0){
            return res
            .status(400).send({msg: "A lista está vazia"})
        } else {
            
            return res
            .status(200).send({msg: "A lista está com varios itens", limit, offset: page, produtosPaginados})
        }

    }catch(error){
        return res
        .status(500).send({msg:"erro interno"})
    }
})