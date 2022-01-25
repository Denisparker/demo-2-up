import React from 'react'
import c from 'classnames'
import s from './style.module.sass'
import { motion } from 'framer-motion'
import Link from 'components/Link'

const Page: React.FC = ({ children }) => {
  return (
    <div className={s.Page}>
      <div
        className={c(
          s.header,
          'color-w l letter-spacing-02 font-s-xlarge ph-2'
        )}
      >
        <div>
          <h3>DEMO PROJECT</h3>
        </div>
        <div className={s.links}>
          <div className={s.link}>
            <Link to='/create'>
              <p>CREATE</p>
            </Link>
          </div>
          <div className={s.link}>
            <Link to='/'>
              <p>LIST</p>
            </Link>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={s.content}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Page
