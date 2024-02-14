import type { ressource } from "@prisma/client";
import { db } from "@/db";
import { notFound } from "next/navigation";

export async function findAllRessource(): Promise<ressource[]> {
  console.log("[+] findAllRessource query succesfully served")
  return await db.ressource.findMany({
    orderBy: {
      created_at: 'desc',
    }
  })
}
