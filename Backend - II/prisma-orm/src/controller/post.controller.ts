import { Request, Response } from "express";
import db from "../database/prisma.conecction";

class PostController {
  public async create(req: Request, res: Response) {
    try {
      const { title, content, published, author, authorId } = req.body;
      await db.post.create({
        data: {
          title,
          content,
          published: published === true || published === 'true',
          authorId,
        },
      });
      return res.status(201).json({ success: true, msg: "Post Cadastrado" });
    } catch (error) {
      return res.status(500).json({ success: false, msg: "Servidor OFF" });
    }
  }
}

export default PostController;
