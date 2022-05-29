import { Link } from 'react-router-dom'
import css from './styles.module.css'
import { motion } from 'framer-motion'
import { usePlanet } from '../../hooks'
import { pathnames } from './data'

export const MobileTabs = ({ planet = 'earth', color = '#6D2ED5' }) => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        {pathnames.map(item => {
          const { path } = item
          return (
            <li className={css.item} key={path}>
              <Link to={`/${planet}/${path}`}>{path}</Link>
              <Underline path={path} color={color} />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const Underline = ({ path, color }) => {
  const { currentTab } = usePlanet()
  return (
    <motion.div
      initial={{ scaleX: '0' }}
      animate={{ scaleX: currentTab === path ? 1 : 0 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.3 }}
      className={css.progress}
      style={{ backgroundColor: color }}
    ></motion.div>
  )
}
