import express from 'express'
import dotenv from 'dotenv'
import ProductController from './controller/product.controller'
import StoreController from './controller/store.controller'
import SupplierController from './controller/supplier.controller'
import UserController from './controller/user.controller'

const app = express()

dotenv.config()

app.use(express.json())

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server is running. Port: " + PORT)
})

//Routes

const useProducts = new ProductController()

app.post('/products', useProducts.create)
app.get('/products', useProducts.list)

const useStore = new StoreController()

app.post('/store', useStore.create)
app.get('/store', useStore.list)

const useSupplier = new SupplierController()

app.post('/supplier', useSupplier.create)
app.get('/supplier', useSupplier.list)

const useUser = new UserController()

app.post('/user', useUser.create)
app.get('/user', useUser.list)