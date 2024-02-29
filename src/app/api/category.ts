import type { NextApiRequest, NextApiResponse } from "next";
import { findAllCategory } from "@/db/queries/category";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const categories = await findAllCategory()
      res.status(200).json({ categories })
    } catch (err) {
      res.status(500).json({ error: '[-] Failed to load data' })
    }
  } else {
    res.status(404)
  }
}
