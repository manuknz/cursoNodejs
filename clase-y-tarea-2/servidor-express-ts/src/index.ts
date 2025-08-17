import express from "express";
import saludoRoutes from "./routes/saludo.routes";
import saludoPersonalizadoRoutes from "./routes/saludoPersonalizado.routes";
import { logger } from "./middlewares/logger";

const app = express();
const PORT = 3000;

app.use(logger);

// Agregamos express.json() para manejar JSON en el body
app.use(express.json());

app.use("/api", saludoRoutes);
app.use("/api", saludoPersonalizadoRoutes);
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
