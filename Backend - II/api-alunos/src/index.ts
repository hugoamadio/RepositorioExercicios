import express from "express";
import * as dotenv from "dotenv";
import studentsRoutes from "./routes/students.routes";
import classroomsRoutes from "./routes/classrooms.routes"
import registrationRoutes from "./routes/registration.routes"


dotenv.config();

const app = express();
app.use(express.json());

//ROUTES
app.use("/students", studentsRoutes());
app.use("/classrooms", classroomsRoutes())
app.use("/registration", registrationRoutes())

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}...`);
});
