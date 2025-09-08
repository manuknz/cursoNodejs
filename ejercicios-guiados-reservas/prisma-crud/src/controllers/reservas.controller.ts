import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getReservas = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const reservas = await prisma.reserva.findMany();

  res.json(reservas);
};

export const getReservaById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const reserva = await prisma.reserva.findMany({
      where: { userId: Number(id) },
    });
    if (!reserva) {
      return res
        .status(500)
        .json({ error: "Error al obtener reservas del usuario" });
    }
    res.json(reserva);
  } catch (error) {
    next(error);
  }
};

export const crearReserva = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId, fecha } = req.body;
  try {
    const nuevaReserva = await prisma.reserva.create({
      data: {
        userId,
        fecha,
      },
    });

    res.json(nuevaReserva);
  } catch (error) {
    next(error);
  }
};

export const actualizarReserva = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { userId, fecha } = req.body;

  try {
    const reservaActualizada = await prisma.reserva.update({
      where: { id: Number(id) },
      data: {
        fecha: fecha,
        userId: userId,
      },
    });
    res.json(reservaActualizada);
  } catch (error) {
    next(error);
  }
};

export const borrarReserva = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const borrarReserva = await prisma.reserva.delete({
      where: {
        id: Number(id),
      },
    });

    res.json(borrarReserva);
  } catch (error) {
    next(error);
  }
};
