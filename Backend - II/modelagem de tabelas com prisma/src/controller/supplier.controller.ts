import { Request, Response } from 'express'
import database from '../database/prisma.connection'

class SupplierController{
    public async create(req: Request, res: Response){
        try{
            const { name, email, rating } = req.body
            await database.supplier.create({
                data : {
                    email,
                    name,
                    rating
                }
            })
            return res.status(201).json({ success: true, msg: "Supplier created successifuly" })
        } catch(error) {
            return res.status(400).json({ success: false, msg: "Error when created supplier" })
        } finally {
            database.$disconnect()
        }
    }

    public async list(req: Request, res: Response){
        try{
            const suppliers = await database.supplier.findMany()
            return res.status(200).json({ success: true, data: suppliers})
        } catch(error) {
            return res.status(400).json({ success: false, msg: "Error when listing"})
        } finally {
            database.$disconnect()
        }
    }
}

export default SupplierController