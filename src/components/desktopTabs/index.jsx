import { Link } from 'react-router-dom'
import { pathnames } from './data'
import { usePlanet } from '../../hooks'
import css from './styles.module.css'
import { planets } from '../../data'
import cn from 'classnames'

export const DesktopTabs = ({ planet = 'earth' }) => {
  const { currentPlanet, currentTab } = usePlanet()

  const color = planets.find(item => item.name === currentPlanet)?.color

  return (
    <ul className={css.list}>
      {pathnames.map(item => {
        const { path, number } = item
        const isActive = currentTab === path
        return (
          <li className={css.item}>
            <Link
              className={cn(css.pathname, isActive && css.disable)}
              to={`/${planet}/${path}`}
              style={{ backgroundColor: isActive && color }}
            >
              <span className={css.number}>{number}</span>
              {path}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
