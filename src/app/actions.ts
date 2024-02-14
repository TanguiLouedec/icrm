"use server"

import { revalidatePath } from "next/cache"

export async function createRessource(prevState: any, formData: FormData) {
  try {
    revalidatePath('/')
    console.log(formData)
    return { message: '[+] Added ressource' }
  } catch (e) {
    return { message: "[-] Failed to create ressource" }
  }
}
