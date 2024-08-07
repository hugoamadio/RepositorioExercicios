import { Request, Response } from "express";
import database from "../database/prisma.connection";

class StoreController {
  public async create(req: Request, res: Response) {
    const { name, address, numberBranches, openingDatetime } = req.body;
    try {
      await database.store.create({
        data: {
          name,
          address,
          numberBranches,
          openingDatetime,
        },
      });
      return res
        .status(201)
        .json({ success: true, msg: "Store registred successfully" });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ success: false, msg: "Error when registering store" });
    } finally {
      database.$disconnect();
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const store = await database.store.findMany();
      console.log(store)
      return res.status(200).json({ success: true, data: store });
    } catch (error) {
        return res.status(400).json({ success: false, msg: "Error when listing" })
    } finally {
        database.$disconnect()
    }
  }
}

export default StoreController;
