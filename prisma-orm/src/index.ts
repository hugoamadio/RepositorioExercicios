import express from "express";
import dotenv from 'dotenv'
import UserController from "./controller/user.controller";
import PostController from "./controller/post.controller";

dotenv.config()

const app = express();

app.use(express.json());

const port = process.env.PORT

app.listen(port, () => {
  console.log("Server is running...");
});

//ROUTES
app.get('/', (req,res) => {
    return res.status(200).json({ success: true, msg: 'Server is running!' })
})

//CONTROLLER USER
const userController = new UserController()
const postController = new PostController()
app.post('/users', userController.create)

app.get('/users', userController.list)

app.post('/posts', postController.create)