import { Request, Response } from "express";

export const saludoPersonalizado = (req: Request, res: Response) => {
  // Obtener nombre del body
  const { nombre } = req.body ?? {};

  // Validar que el nombre no esté vacío
  if (!nombre) {
    return res.status(400).json({ error: "El nombre es requerido" });
  }

  // Enviar saludo personalizado según la hora del día
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) {
    res.json({
      mensaje: "Buenos días, " + nombre + ". ¡Bienvenido/a a nuestra API!",
    });
  } else if (hour >= 12 && hour < 20) {
    res.json({
      mensaje: "Buenas tardes, " + nombre + ". ¡Bienvenido/a a nuestra API!",
    });
  } else {
    res.json({
      mensaje: "Buenas noches, " + nombre + ". ¡Bienvenido/a a nuestra API!",
    });
  }
};
