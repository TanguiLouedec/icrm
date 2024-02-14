import { findAllRessource } from "@/db/queries/ressource"

export default async function Ressource() {
  const ressources = await findAllRessource()
  return (
    <div>
      {ressources.map(ressource => {
        return (
          <div key={ressource.id}>
            <h3>{ressource.tittle}</h3>
            <p>{ressource.description}</p>
            <p>{ressource.created_at.toString()}</p>
            <p>{ressource.publication_date.toString()}</p>
          </div>
        )
      })}
    </div>
  ) 
}
