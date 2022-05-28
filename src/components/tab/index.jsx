import css from './styles.module.css'
import { motion } from 'framer-motion'
import { framer_opacity } from './framer'

export const Tab = ({ data, title = 'Planet' }) => {
  const { info, sourceUrl, svg, png } = data
  return (
    <motion.div className={css.container}>
      <motion.div className={css.image} {...framer_opacity}>
        <img src={svg} alt={title} />
      </motion.div>
      <div className={css.info}>
        <div className={css.text}>
          <h1 className={css.title}>{title}</h1>
          <motion.p {...framer_opacity} className={css.desc}>
            {info}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}
