import { request, Request, response, Response } from "express";
import db from "../database/prisma.connection";

class ClassroomsController {
  public async create(req: Request, res: Response) {
    const { subject, vacations } = req.body;
    try {
      const classroom = await db.classrooms.create({
        data: {
          subject,
          vacations,
        },
      });
      if (classroom) {
        return res
          .status(200)
          .json({ success: true, msg: "Classroom created.", data: classroom });
      }
      return res
        .status(500)
        .json({ success: false, msg: "Student not created." });
    } catch (error) {
      return res.status(500).json({ success: false, msg: "Error Database" });
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const classrooms = await db.classrooms.findMany();
      return res
        .status(200)
        .json({ success: true, msg: "Listing classrooms", data: classrooms });
    } catch (error) {
      return res.status(500).json({ success: false, msg: "Error Database" });
    }
  }

  public async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const classroom = await db.classrooms.findUnique({
        where: {
          id,
        },
      });
      if (classroom) {
        return res
          .status(200)
          .json({ success: true, msg: "Classroom showed", data: classroom });
      }
      return res.status(404).json({ success: true, msg: "Student not found." });
    } catch (error) {
      return res.status(500).json({ success: false, msg: "Error Database" });
    }
  }

  public async update(req: Request, res: Response){
    try{
        const {id} = req.params
        const { vacations, subject } = req.body
        const classroom = await db.classrooms.findUnique({
            where:{
                id
            }
        })
        if(!classroom){
            return res.status(404).json({success: false, msg: "Classroom not found"})
        }
        if(vacations || subject){
            await db.classrooms.update({
                where: {
                    id
                },
                data:{
                    vacations,
                    subject
                }
            })
            return res.status(200).json({ success: true, msg: "Classroom updated"})
        }
    }catch(error){
        return res.status(500).json({ success: false, msg: "Error Database"})
    }
  }

  public async delete(req: Request, res: Response){
    const { id } = req.params
    try{
        const classroom = await db.classrooms.findUnique({
            where: {
                id
            }
        })
        if(!classroom){
            return res.status(404).json({success: false, msg: "Classroom not found"})
        }
        await db.classrooms.delete({
            where: {
                id
            }
        })
        return res.status(200).json({ success: true, msg: "Classroom deleted"})
    } catch(error) {
        return res.status(500).json({ success: false, msg: "Error Database"})
    }
  }
}

export default ClassroomsController;
