import css from './styles.module.css'
import { Twirl as Hamburger } from 'hamburger-react'

export const Toggler = () => {
  return (
    <>
      <div className={css.cta}>
        <Hamburger />
      </div>
    </>
  )
}
