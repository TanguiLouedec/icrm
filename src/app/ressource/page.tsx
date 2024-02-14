import { findAllRessource } from "@/db/queries/ressource"
export default async function Ressource() {
  const ressources = await findAllRessource()
  return (
    <div>
      {ressources.map(ressource => {
        return (
          <div key={ressource.id}>
            {ressource.tittle}
          </div>
        )
      })}
    </div>
  ) 
}
