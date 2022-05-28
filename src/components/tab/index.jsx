import css from './styles.module.css'

export const Tab = ({ data, title = 'Planet' }) => {
  const { info, sourceUrl, svg, png } = data
  return (
    <div>
      <img src={svg} alt={title} />
      {title}
    </div>
  )
}
