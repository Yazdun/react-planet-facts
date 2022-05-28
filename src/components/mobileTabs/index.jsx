import { Link, useLocation } from 'react-router-dom'
import css from './styles.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { usePlanet } from '../../hooks'

export const MobileTabs = ({ planet = 'earth', color = '#6D2ED5' }) => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <Link to={`/${planet}/overview`}>overview</Link>
          <Underline path="overview" color={color} />
        </li>
        <li className={css.item}>
          <Link to={`/${planet}/structure`}>structure</Link>
          <Underline path="structure" color={color} />
        </li>
        <li className={css.item}>
          <Link to={`/${planet}/geology`}>geology</Link>
          <Underline path="geology" color={color} />
        </li>
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
