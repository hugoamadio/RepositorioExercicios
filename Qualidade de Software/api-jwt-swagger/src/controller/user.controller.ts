import {Request, Response} from "express";
import db from "../database/prisma";
import * as bcrypt from "bcrypt"

class UserController {
  async index(req: Request, res: Response) {
    const users = await db.users.findMany();
    return res.status(200).json({msg: "Lista de usuários.", data: {users}});
  }

  async create(req: Request, res: Response) {
    const {name, email, password} = req.body;

    if (!email || !password) {
      return res.status(400).json({msg: "Dados inválidos."});
    }

    try {
      const salt = bcrypt.genSaltSync(10)
      const hash = bcrypt.hashSync(password, salt);

      const user = await db.users.create({
        data: {name, email, password: hash },
      });
      return res.status(200).json({msg: "Usuário criado com sucesso."});
    } catch (error) {
      console.log(error);
      return res.status(500).json({msg: "Dados inválidos."});
    }
  }
}

export default UserController;
