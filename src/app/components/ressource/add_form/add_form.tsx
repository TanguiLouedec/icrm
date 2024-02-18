"use client" 

import { useFormState } from "react-dom"
import { createRessource } from "@/app/actions"
import { findAllCategory } from "@/db/queries/category"
import type { category } from "@prisma/client"

const initialState = {
  message: null,
}

export function AddForm(categories: any) {
  const [state, formAction] = useFormState(createRessource, initialState)
  return (
    <form action={formAction}>
      <input type="file" id="image" name="image" required />
      <input type="text" id="tittle" name="tittle" required />
      <input type="date" id="publication_date" name="publication_date" required />
      <select name="category_select" id="category_select">
        {categories.map(category => {
          return (
            <option value={category.id}>{category.name}</option>
          )
        })} 
      </select>
      <button type="submit">submit</button>
    </form>
  )
}
