import { Link } from 'react-router-dom'
import { pathnames } from './data'
import { usePlanet } from '../../hooks'
import css from './styles.module.css'
import { planets } from '../../data'
import cn from 'classnames'

export const DesktopTabs = ({ planet = 'earth' }) => {
  const { currentPlanet, currentTab } = usePlanet()
  const color = planets.find(item => item.name === currentPlanet)?.color
  const activeLinkAriaLabel = name =>
    name === currentTab ? `${name} is the current tab` : name

  return (
    <ul className={css.list}>
      {pathnames.map(item => {
        const { path, number, title } = item
        const isActive = currentTab === path
        return (
          <li className={css.item} key={path}>
            <Link
              className={cn(css.pathname, isActive && css.disable)}
              to={`/${planet}/${path}`}
              style={{ backgroundColor: isActive && color }}
              aria-label={activeLinkAriaLabel(path)}
            >
              <span className={css.number}>{number}</span>
              {title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
