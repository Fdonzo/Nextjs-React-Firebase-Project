import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("my body", req.body);
    const { name, password, email } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    //const dateObject = new Date();
    //const date = dateObject.now();
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (user) {
      //include return
      res.status(200).json({ message: "already registered" });
      return;
    }

    try {
      await prisma.user.create({
        data: {
          name,
          email,
          password: hashPassword,
          emailVerified: new Date(),
        },
      });

      return res.status(200).send({ message: "success" });
    } catch (error) {
      return res.status(500).send({ error: error.toString() });
    }
  } else {
    return res.status(400).send({ message: "route is not valid" });
  }
}
