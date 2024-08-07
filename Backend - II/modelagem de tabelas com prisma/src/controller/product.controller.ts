import { Request, Response } from "express";
import database from "../database/prisma.connection";

class ProductController {
  public async create(req: Request, res: Response) {
    try {
      const { description, price, qntStock, typeProduct } = req.body;
      await database.products.create({
        data: {
          description,
          price,
          qntStock,
          typeProduct,
        },
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
        .json({ success: false, msg: "Error when listing products" });
    } finally {
      database.$disconnect();
    }
  }

  public async selectType(req: Request, res: Response) {
    try {
      const { type } = req.params;
      const products = await database.products.findMany({
        where: { typeProduct: type },
      });
      return res.status(200).json({ success: true, data: products });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, msg: "Error when select products" });
    } finally {
      database.$disconnect();
    }
  }

  public async selectValue(req: Request, res: Response) {
    try {
      const { value } = req.params;
      const numericValue = Number(value);
      if (isNaN(numericValue)) {
        return res
          .status(400)
          .json({ success: false, msg: "Value is not a number" });
      }
      const product = await database.products.findMany({
        where: {
          price: {
            gt: numericValue,
          },
        },
      })
      return res.status(200).json({ success: true, data: product })
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, msg: "Error when select products" });
    } finally {
      database.$disconnect();
    }
  }
}

export default ProductController;
