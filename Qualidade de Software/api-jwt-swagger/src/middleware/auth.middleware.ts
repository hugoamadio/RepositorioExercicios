import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

function auth(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  const token = authorization?.split(" ")[1];

  if (!authorization || !token) {
    return res.status(401).json({ msg: "Token inválido." });
  }

  let decoded: any;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET || "");
  } catch (error) {
    console.log(error);
    return res.status(401).json({ msg: "Token inválido." });
  }

  console.log(decoded);

  return next();
}

export default auth;
