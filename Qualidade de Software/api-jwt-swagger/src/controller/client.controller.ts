import { Request, Response } from "express";

class ClientController {
  index(req: Request, res: Response) {
    return res
      .status(200)
      .json({ msg: "Lista de clientes.", data: { clients: [] } });
  }
}

export default ClientController;
