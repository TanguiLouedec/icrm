import styles from "./about.module.scss"

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.tittle}>Index Cabien des Ressources et Médias (ICRM)</h1>
        <p className={styles.content}>L'ICMR est dédié à la promotion de l'éducation et de la culture à travers la collecte, le partage et la diffusion de diverses ressources médias. En tant qu'institut, nous nous engageons à offrir une plateforme accessible et facile à utiliser, permettant à tous les Cabiens d'explorer et de bénéficier de nos collections.</p>
      </div>
    </div>
  )
}
