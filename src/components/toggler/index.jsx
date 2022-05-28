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

  return (
    <>
      <button className={css.cta} onClick={() => setOpen(true)}>
        <VscMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div {...framer_menu} className={css.menu}>
            <motion.button
              onClick={() => setOpen(false)}
              className={css.close}
              {...framer_button}
            >
              <VscChromeClose />
            </motion.button>
            <ul className={css.list}>
              {planets.map((planet, idx) => {
                const { name, pathname, color } = planet
                return (
                  <li key={name} className={css.item}>
                    <Link
                      to={pathname}
                      className={css.link}
                      onClick={() => setOpen(false)}
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
                        className={cn(
                          css.chevron,
                          currentPlanet === pathname && css.active,
                        )}
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
