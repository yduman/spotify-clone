import bcrypt from "bcrypt";
import prisma from "../lib/prisma";

export const createUser = async (email: string, password: string) => {
  const salt = bcrypt.genSaltSync(10);
  try {
    return await prisma.user.create({
      data: {
        email,
        password: bcrypt.hashSync(password, salt),
      },
    });
  } catch (e) {
    throw new Error("Email already in use");
  }
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  const isValidUser = user && (await bcrypt.compare(password, user.password));

  if (!isValidUser) {
    throw new Error("Invalid credentials");
  }

  return user;
};
