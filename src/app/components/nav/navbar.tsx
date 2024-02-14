import styles from "./navbar.module.scss"
import Link from "next/link"

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/">Home</Link>
      <Link href="/ressource">Ressources</Link>
    </div>
  )
}
