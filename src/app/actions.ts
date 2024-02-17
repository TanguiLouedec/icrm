"use server"

import { revalidatePath } from "next/cache"

export async function createRessource(prevState: any, formData: FormData) {
  try {
    revalidatePath('/')
    return { message: '[+] Add request received' }
  } catch (e) {
    return { message: "[-] Add request error" }
  }
}
