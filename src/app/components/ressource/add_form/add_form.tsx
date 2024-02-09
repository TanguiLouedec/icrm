"use client" 

import { useFormState } from "react-dom"
import { createRessource } from "@/app/actions"

const initialState = {
  message: null,
}

export function AddForm() {
  const [state, formAction] = useFormState(createRessource, initialState)
  return (
    <form action={formAction}>
      <input type="text" id="tittle" name="tittle" required />
      <button type="submit">{state?.message} submit</button>
    </form>
  )
}
