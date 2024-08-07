import { Request, Response} from 'express'
import database from '../database/prisma.connection'

class UserController{
    public async create(req: Request, res: Response){
        try{
            const { name, age, email, password, github } = req.body
            await database.user.create({
                data:{
                    age,
                    email,
                    name,
                    password,
                    github
                }
            })
            return res.status(201).json({ success: true, msg: 'Created user successfuly' })
        } catch(error){
            return res.status(400).json({ success: false, msg: 'Error when created user'})
        } finally {
            database.$disconnect()
        }
    }

    public async list(req: Request, res: Response){
        try{
            const users = await database.user.findMany()
            return res.status(200).json({ success: true, data: users })
        } catch(error) {
            return res.status(400).json({ success: false, msg: "Error when listing" })
        }
    }
}

export default UserController