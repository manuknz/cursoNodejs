import { Request, Response } from "express";

export const saludar = (req: Request, res: Response) => {
  console.log("Hola");
  res.json({ mensaje: "¡Hola desde Express + TypeScript!" });
};
