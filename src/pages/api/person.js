import { prisma } from "../../db/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await prisma.user.findMany();
    return res.json(data);
  }

  if (req.method === "POST") {
    const data = await prisma.user.create({
      data: {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
      },
    });
    return res.json(data);
  }
  return res.status(404);
}
