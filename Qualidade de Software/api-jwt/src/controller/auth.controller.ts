import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

class AuthController {
  login(req: Request, res: Response) {
    const { login, password } = req.body;

    if (!login || !password) {
      return res
        .status(401)
        .json({ msg: "Login ou senha inválidos.", data: {} });
    }

    if (login === "admin" && password === "admin") {
      const newToken = jwt.sign(
        { user: "admin", msg: "O admin ta ON!!!" },
        process.env.JWT_SECRET || "",
        {
          expiresIn: "1d",
        }
      );

      return res.status(200).json({
        msg: "Login efetuado com sucesso",
        data: { token: newToken },
      });
    }

    return res.status(401).json({ msg: "Login ou senha inválidos.", data: {} });
  }

  login2Fa(req: Request, res: Response) {
    const { login, password } = req.body;

    if (!login || !password) {
      return res
        .status(401)
        .json({ msg: "Login ou senha inválidos.", data: {} });
    }

    if (login === "admin" && password === "admin") {
      return res.status(200).json({
        msg: "Login efetuado com sucesso",
        data: { code: 2356 },
      });
    }

    return res.status(401).json({ msg: "Login ou senha inválidos.", data: {} });
  }

  confirm2Fa(req: Request, res: Response) {
    const { code } = req.body;

    if (code === 2356) {
      const newToken = jwt.sign(
        { user: "admin", msg: "O admin ta ON!!!" },
        process.env.JWT_SECRET || "",
        {
          expiresIn: "1d",
        }
      );

      return res.status(200).json({
        msg: "Login efetuado com sucesso",
        data: { token: newToken },
      });
    }

    return res.status(401).json({ msg: "Código inválido.", data: {} });
  }
}

export default AuthController;
