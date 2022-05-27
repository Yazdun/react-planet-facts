import { Toggler } from '../'
import { Navigations } from '../navigations'
import css from './styles.module.css'

export const Topbar = () => {
  return (
    <nav className={css.nav}>
      <p className={css.logo}>the planets</p>
      <Navigations />
      <Toggler />
    </nav>
  )
}
