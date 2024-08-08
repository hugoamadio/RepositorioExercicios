import { Request, Response } from "express";
import db from "../database/prisma.connection";

class RegistrationController {
  public async create(req: Request, res: Response) {
    try {
      const { studentId, classroomId } = req.body;

      const verifyVacancy = await db.classrooms.findMany({
        where: {
          id: classroomId
        }
      })

      const vacancyTotal = verifyVacancy[0].vacations

      if(vacancyTotal <= 0){
        return res.status(400).json({ success: false, msg: "There are no vacancies in the classroom" })
      }

      const register = await db.registrations.create({
        data: {
          studentId,
          classroomId,
        },
      });
      if (register) {

        await db.classrooms.update({
          where: {
            id: classroomId
          },
          data:{
            vacations: vacancyTotal - 1
          }
        })

        return res.status(200).json({
          success: true,
          msg: "Registration created.",
          data: register,
        });
      }
      return res
        .status(400)
        .json({ success: false, msg: "Registration not created." });
    } catch (error) {
      return res.status(500).json({ success: false, msg: "Error Database"});
    }
  }

  public async list(req: Request, res: Response) {
    try {
      const registers = await db.registrations.findMany();
      if (registers) {
        return res
          .status(200)
          .json({ success: true, msg: "Registration listed", data: registers });
      }
      return res
        .status(400)
        .json({ success: false, msg: "Registration not found" });
    } catch (error) {
      return res.status(500).json({ success: false, msg: "Error Database" });
    }
  }

  public async show(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const register = await db.registrations.findMany({
        where: {
          id: id,
        },
      });
      if (register) {
        return res
          .status(200)
          .json({ success: true, msg: "Registration showed", data: register });
      }
      return res
        .status(404)
        .json({ success: false, msg: "Registration not found" });
    } catch (error) {
      return res.status(500).json({ success: false, msg: "Error Database" });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { studentId, classroomId } = req.body;
      const registration = await db.registrations.findUnique({
        where: {
          id: id,
        },
      });
      if (!registration) {
        return res
          .status(404)
          .json({ success: true, msg: "Registration not found." });
      }
      if (registration) {
        await db.registrations.update({
          where: {
            id,
          },
          data: {
            studentId,
            classroomId,
          },
        });
        return res
          .status(200)
          .json({ success: true, msg: "Registration updated." });
      }
    } catch (error) {
      return res.status(500).json({ success: false, msg: "Error Database" });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const { id } = req.params
      const registration = await db.registrations.findUnique({
        where: {
          id,
        },
      });

      if (registration) {
        await db.registrations.delete({
          where: { id },
        });
        return res.status(200).json({ success: true, msg: "Registration deleted." });
      }

      return res.status(404).json({ success: true, msg: "Registration not found." });
    } catch (error) {
      return res.status(500).json({ success: false, msg: "ERROR Database." });
    }
  }
}

export default RegistrationController;
