import express from "express";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { logger } from "./middlewares/logger";

const app = express();

app.use(express.json());
app.use(logger);
app.use("/api", userRoutes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
