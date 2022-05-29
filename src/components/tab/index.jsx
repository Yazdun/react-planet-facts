import css from './styles.module.css'
import { motion } from 'framer-motion'
import { framer_img, framer_opacity } from './framer'
import { DesktopTabs } from '../desktopTabs'
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs'

export const Tab = ({ data, title = 'earth' }) => {
  const { info, sourceUrl, svg, png } = data
  return (
    <motion.div className={css.container}>
      <motion.div className={css.image} {...framer_opacity}>
        <img src={svg} alt={title} className={css.planet} />
        {png && (
          <motion.img
            src={png}
            className={css.geology}
            alt={`{name}'s geology`}
            {...framer_img}
          />
        )}
      </motion.div>
      <div className={css.info}>
        <div className={css.text}>
          <h1 className={css.title}>{title}</h1>
          <motion.p {...framer_opacity} className={css.desc}>
            {info}
          </motion.p>
          <p className={css.source}>
            <span>Source :</span>
            <a href={sourceUrl} target="_blank" rel="noreferrer">
              Wikipedia
            </a>
            <BsFillArrowUpRightSquareFill />
          </p>
        </div>
        <DesktopTabs planet={title} />
      </div>
    </motion.div>
  )
}
