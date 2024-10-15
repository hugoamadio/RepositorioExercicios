import express from "express";
import routes from "./routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./docs/swagger.json";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/docs", swaggerUi.serve);
app.get("/docs", swaggerUi.setup(swaggerDoc));

app.use(routes);

export default app;
