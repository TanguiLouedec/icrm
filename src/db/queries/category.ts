import type { category } from "@prisma/client";
import { db } from "@/db";

export async function findAllCategory(): Promise<category[]> {
  console.log("[+] findAllCategory query succesfully served")
  return await db.category.findMany({
    orderBy: {
      id: 'asc',
    }
  })
}
