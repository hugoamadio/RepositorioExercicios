import { Request, Response } from "express";
import db from "../database/prisma";

class ProductController {
  async index(req: Request, res: Response) {
    try {
      const products = await db.products.findMany();
      return res
        .status(200)
        .json({ msg: "Lista de produtos.", data: products });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: "ERROR database." });
    }
  }
}

export default ProductController;
