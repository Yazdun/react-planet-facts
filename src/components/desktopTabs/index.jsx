import { Link } from 'react-router-dom'
import { pathnames } from './data'
import css from './styles.module.css'

export const DesktopTabs = ({ planet = 'earth', color = '#6D2ED5' }) => {
  return (
    <ul className={css.list}>
      {pathnames.map(item => {
        const { path, number } = item
        return (
          <li className={css.item}>
            <Link className={css.pathname} to={`/${planet}/${path}`}>
              <span className={css.number}>{number}</span>
              {path}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
