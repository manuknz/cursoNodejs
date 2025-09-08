import { Router } from "express";

import {
  actualizarReserva,
  borrarReserva,
  crearReserva,
  getReservaById,
  getReservas,
} from "../controllers/reservas.controller";
import { verifyToken } from "../middlewares/auth";

const router = Router();

router.post("/reserva", verifyToken, crearReserva);
router.get("/reserva", verifyToken, getReservas);
router.get("/reserva/:id", verifyToken, getReservaById);
router.put("/reserva/:id", verifyToken, actualizarReserva);
router.delete("/reserva/:id", verifyToken, borrarReserva);

export default router;
