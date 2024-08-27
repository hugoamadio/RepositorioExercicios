import { Request, Response } from "express";
import db from "../database/prisma.connection";
import * as bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

class AuthController {
  public async create(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, msg: "Required fields." });
    }

    try {
      const studentFind = await db.students.findUnique({
        where: { email },
        include: { user: true },
      });

      if (
        !studentFind ||
        !bcrypt.compareSync(password, studentFind.user?.password || "")
      ) {
        return res
          .status(401)
          .json({ success: false, msg: "Email or password incorrect." });
      }

      const token = uuid();

      await db.users.update({
        where: { id: studentFind.user?.id },
        data: { token },
      });

      res
        .status(200)
        .json({ success: true, msg: "Login success", data: { token } });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, msg: "ERROR Database." });
    }
  }
}

export default AuthController;
