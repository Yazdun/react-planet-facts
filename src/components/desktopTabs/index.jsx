import { Link } from 'react-router-dom'
import css from './styles.module.css'

export const DesktopTabs = () => {
  return (
    <ul>
      <li>
        <Link to="/">overview</Link>
      </li>
      <li>
        <Link to="/">structure</Link>
      </li>
      <li>
        <Link to="/">geology</Link>
      </li>
    </ul>
  )
}
