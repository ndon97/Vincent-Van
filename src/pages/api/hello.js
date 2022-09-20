// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ name: "jane doe" });
  }
  return res.status(404).json({ error: "not found" });
}
