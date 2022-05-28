import css from './styles.module.css'
import { VscMenu, VscChromeClose } from 'react-icons/vsc'
import { MdNavigateNext } from 'react-icons/md'
import { useState } from 'react'
import { planets } from '../../data'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  framer_button,
  framer_circle,
  framer_menu,
  framer_name,
} from './framer'
import cn from 'classnames'
import { usePlanet } from '../../hooks'

export const Toggler = () => {
  const [open, setOpen] = useState(false)
  const currentPlanet = usePlanet()

  const openMenuAriaLabel = open
    ? 'hamburger menu is opened'
    : 'hamburger menu is closed'

  const closeMenuAriaLabel = open
    ? 'close the hamburger menu'
    : 'hamburger menu is closed'

  const activeLinkAriaLabel = name => `${name} is the current page`

  return (
    <>
      <button
        className={css.cta}
        onClick={() => setOpen(true)}
        aria-label={openMenuAriaLabel}
      >
        <VscMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div {...framer_menu} className={css.menu}>
            <motion.button
              onClick={() => setOpen(false)}
              className={css.close}
              {...framer_button}
              aria-label={closeMenuAriaLabel}
            >
              <VscChromeClose />
            </motion.button>
            <ul className={css.list}>
              {planets.map((planet, idx) => {
                const { name, pathname, color } = planet
                const isActive = currentPlanet === pathname
                return (
                  <li key={name} className={css.item}>
                    <Link
                      to={pathname}
                      className={css.link}
                      onClick={() => setOpen(false)}
                      aria-label={isActive ? activeLinkAriaLabel(name) : name}
                    >
                      <span className={css.text}>
                        <motion.div
                          className={css.circle}
                          style={{ backgroundColor: color }}
                          {...framer_circle(idx)}
                        ></motion.div>
                        <motion.span {...framer_name}>{name}</motion.span>
                      </span>

                      <MdNavigateNext
                        className={cn(css.chevron, isActive && css.active)}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
