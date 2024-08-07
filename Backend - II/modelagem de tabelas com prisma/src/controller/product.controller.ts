import { Request, Response } from "express";
import database from "../database/prisma.connection";

class ProductController {
  public async create(req: Request, res: Response) {
    try {
      const {
        description,
        price,
        qntStock,
        typeProduct
      } = req.body;
      await database.products.create({
        data: {
          description,
          price,
          qntStock,
          typeProduct
        }
      });
      return res
        .status(201)
        .json({ success: true, msg: "Product registred successfully" });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, msg: "error when registering product" });
    } finally {
      database.$disconnect();
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const products = await database.products.findMany();
      return res
        .status(200)
        .json({ success: true, msg: "Products listed", data: products });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, msg: "Error listing products" });
    } finally {
      database.$disconnect();
    }
  }
}

export default ProductController