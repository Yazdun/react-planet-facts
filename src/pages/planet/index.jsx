import css from './styles.module.css'
import { useParams } from 'react-router-dom'
import { planets } from '../../data'

export const Planet = () => {
  const { id: planetName } = useParams()
  const planet = planets.find(item => item.name === planetName)

  return <div>{planet.name}</div>
}
