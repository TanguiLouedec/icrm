"use client" 

import { useFormState } from "react-dom"
import { createRessource } from "@/app/actions"
import { useEffect, useState } from "react"

const find_all_endpoint = '@/app/api/category'

const initialState = {
  message: null,
}

export function AddForm() {
  const [state, formAction] = useFormState(createRessource, initialState)

  return (
    <form action={formAction}>
      <input type="file" id="image" name="image" required />
      <input type="text" id="tittle" name="tittle" required />
      <input type="date" id="publication_date" name="publication_date" required />
      <select name="category_select" id="category_select">
      </select>
      <button type="submit">submit</button>
    </form>
  )
}
