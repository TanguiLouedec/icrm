import styles from './page.module.scss'
import { AddForm } from '@/app/components/ressource/add_form/add_form'

export default async function Add() {
  return (
    <main>
      <h1>Add a ressource</h1>
      <AddForm />
    </main>
  )
}
