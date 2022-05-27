import { Link } from 'react-router-dom'
import { planets } from '../../data'
import css from './styles.module.css'

export const Navigations = () => {
  return (
    <ul className={css.list}>
      {planets.map(planet => {
        const { name, pathname, color } = planet
        return (
          <li>
            <Link className={css.link} to={pathname}>
              {name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
