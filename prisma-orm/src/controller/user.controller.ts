import { Request, Response } from "express";
import db from "../database/prisma.conecction";

class UserController {
  public async create(req: Request, res: Response) {
    try {
      const { email, name } = req.body;
      const newUser = await db.user.create({
        data: {
          email,
          name,
        },
      });
      return res.status(200).json({ success: true, msg: "User created." });
    } catch (error) {
      return res.status(500).json({ success: false, msg: "User no created." });
    }
  }

  public async list(req: Request, res: Response) {
    try {
        const users = await db.user.findMany()
        return res.status(200).json({ success: true, msg: "Tudo OK", data: users})
    } catch (error) {
        return res.status(500).json({ success: false, msg: "Deu ruim"})
    }
  }
}

export default UserController;
