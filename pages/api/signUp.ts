import { NextApiRequest, NextApiResponse } from "next";
import { createCookie, createToken, validateHttpPost } from "../../utils/auth";
import { createUser } from "../../services/user-service";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  validateHttpPost(req, res);
  const { email, password } = req.body;

  try {
    const user = await createUser(email, password);
    const token = createToken(user);
    const cookie = createCookie(token);

    res.setHeader("Set-Cookie", cookie);
    res.json(user);
  } catch (e) {
    res.status(401).send({ error: e.message });
  }
};
