import { Request, Response, Router } from "express";
import AuthController from "../controller/auth.controller";
import auth from "../middleware/auth.middleware";
import ClientController from "../controller/client.controller";
import UserController from "../controller/user.controller";
import ProductController from "../controller/product.controller";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ msg: "Hello, i am server JWT", data: {} });
});

//AUTH
const authController = new AuthController();
routes.post("/login", authController.login);
routes.post("/login2Fa", authController.login2Fa);
routes.post("/confirm2Fa", authController.confirm2Fa);

//CLIENTS
const clientController = new ClientController();
routes.get("/clients", auth, clientController.index);

//USERS
const userController = new UserController();
routes.get("/users", auth, userController.index);
routes.post("/users", userController.create);

//PRODUCTS
const productController = new ProductController();
routes.get("/products", auth, productController.index);

export default routes;
