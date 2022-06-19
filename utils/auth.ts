import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export const validateHttpPost = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.status(405).send({ error: "Method not allowed" });
  }
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
