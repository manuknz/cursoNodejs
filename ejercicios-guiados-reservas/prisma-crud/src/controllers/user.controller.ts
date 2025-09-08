import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany(); // sinonimo de SELECT * from users
  res.json(users);
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashPassword },
    }); // sinonimo del INSERT into user
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await prisma.user.update({
      //sinonimo de UPDATE
      where: { id: Number(id) },
      data: { name, email },
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id: Number(id) } });
    res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    next(error);
  }
};

export const filterUser = async (req: Request, res: Response) => {
  const { nombre } = req.params;

  const listadoUser = await prisma.user.findMany({
    where: {
      name: {
        contains: nombre,
      },
    },
  });
  res.json(listadoUser);
};

export const ordenUser = async (req: Request, res: Response) => {
  const listadoUserOrdenado = await prisma.user.findMany({
    orderBy: {
      name: "desc",
    },
  });

  res.json(listadoUserOrdenado);
};

export const paginacionUser = async (req: Request, res: Response) => {
  const listapaginada = await prisma.user.findMany({
    skip: 2,
    take: 3,
  });

  res.json(listapaginada);
};
