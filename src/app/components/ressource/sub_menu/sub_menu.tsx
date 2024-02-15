import styles from "./sub_menu.module.scss"

import Link from "next/link"

export default function SubMenu() {
  return (
    <div className={styles.container}>
      <Link href={"/ressource"}>All</Link>
      <Link href={"/ressource/add"}>Add</Link>
      <Link href={"/ressource/category"}>Categories</Link>
    </div>
  )
}
