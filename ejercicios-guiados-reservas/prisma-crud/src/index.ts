import cors from "cors";
import express from "express";

import { logger } from "./middlewares/logger";
import { errorHandler } from "./middlewares/errorHandler";
import loginRoutes from "./routes/login.routes";
import reservasRoutes from "./routes/reservas.routes";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use(logger);
app.use(cors());
app.use("/api", userRoutes);
app.use("/api", reservasRoutes);
app.use("/api", loginRoutes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor");
});
