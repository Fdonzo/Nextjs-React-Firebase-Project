import { PrismaClient } from "@prisma/client";
import axios from "axios";
import bcrypt from "bcrypt";
import crypto from "crypto-js";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    const date = new Date();
    const salt = await bcrypt.genSalt(12);
    //const time = date.getTime();
    //console.log("time", time);
    //const hashDate = await bcrypt.hash(date.toString(), salt);
    const hashedEmail = await bcrypt.hash(email, salt);
    //console.log("hasdate", hashDate);
    const encryptedDateJson = crypto.AES.encrypt(
      JSON.stringify(date),
      hashedEmail
    ).toString();
    const encryptedData = crypto.enc.Base64.stringify(
      crypto.enc.Utf8.parse(encryptedDateJson)
    );
    /*
    const encryptedDate = crypto.AES.encrypt(
      //date.toString(),
      "This is the data that need to be encrypted",
      hashEmail
    ).toString();
    */
    const urlLink = `localhost:3000/authentication/passwordedit?keyOne=${encryptedData}&keyTwo=${hashedEmail}`;
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (user) {
      console.log("user", user);
      try {
        const response = await axios({
          method: "POST",
          url: "https://elxyfdbfd1.execute-api.ap-southeast-1.amazonaws.com/passwordReset",
          mode: "no-cors",
          data: {
            senderName: user.name,
            senderEmail: user.email,
            urlLink,
          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        //console.log(response);
        return res.status(200).send({ message: response.data });
      } catch (err) {
        return res
          .status(500)
          .send({ error: err.toString(), message: response.data });
      }
    }
    return res.status(400).send("user doesn't exit");
  }
}
