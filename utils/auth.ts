import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../lib/prisma";

export const validateHttpPost = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send({ error: "Method not allowed" });
  }
};

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.SPOTIFY_CLONE_TOKEN;
    if (!token) {
      res.status(401).send({ error: "Unauthorized" });
    }

    try {
      const { id } = await jwt.verify(token, "somesecret");
      const user = await prisma.user.findUnique({ where: { id } });
      if (!user) {
        res.status(404).send({ error: "User not found" });
      }

      return handler(req, res, user);
    } catch (e) {
      res.status(500).send({ error: "Internal server error" });
    }
  };
};

export const createToken = (user: User) => {
  return jwt.sign(
    { email: user.email, id: user.id, time: Date.now() },
    "somesecret",
    { expiresIn: "24h" }
  );
};

export const createCookie = (token: string) => {
  return cookie.serialize("SPOTIFY_CLONE_TOKEN", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
};
