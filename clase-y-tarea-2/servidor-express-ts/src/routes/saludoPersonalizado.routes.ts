import { Router } from "express";
import { saludoPersonalizado } from "../controllers/saludoPersonalizado.controller";

const router = Router();
router.post("/saludo", saludoPersonalizado);

export default router;
