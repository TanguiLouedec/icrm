import type { ressource } from "@prisma/client";
import { db } from "@/db";
import { notFound } from "next/navigation";

export async function findAllRessource(): Promise<ressource[]> {
  return await db.ressource.findMany({
    orderBy: {
      created_at: 'desc',
    }
  })
}
