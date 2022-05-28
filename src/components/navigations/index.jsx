import { Link } from 'react-router-dom'
import { planets } from '../../data'
import cn from 'classnames'
import css from './styles.module.css'
import { usePlanet } from '../../hooks'

export const Navigations = () => {
  const { currentPlanet } = usePlanet()
  const activeLinkAriaLabel = name => `${name} is the current page`

  return (
    <ul className={css.list}>
      {planets.map(planet => {
        const { name, pathname, color } = planet
        const isActive = currentPlanet === name

        return (
          <li className={cn(isActive && css.active, css.item)} key={name}>
            <span
              className={css.line}
              style={{ backgroundColor: color }}
            ></span>
            <Link
              className={cn(css.link, isActive && css.active)}
              to={pathname}
              aria-label={activeLinkAriaLabel(name)}
            >
              {name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
