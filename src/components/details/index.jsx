import css from './styles.module.css'

export const Details = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(detail => {
        const { title, info } = detail
        return (
          <li className={css.item} key={title}>
            <span className={css.title}>{title}</span>
            <span className={css.info}>{info}</span>
          </li>
        )
      })}
    </ul>
  )
}
