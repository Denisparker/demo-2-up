import React, { Children } from 'react'
import c from 'classnames'
import s from './style.module.sass'

interface I {
  title: string
  small?: boolean
  middle?: boolean
  large?: boolean
  grey?: boolean
  disable?: boolean
  onClick?: () => void
}

const Button: React.FC<I> = ({
  title,
  small,
  middle,
  large,
  grey,
  disable,
  onClick,
}) => {
  return (
    <div
      className={c(
        s.Button,
        {
          [s.small]: small,
          [s.middle]: middle,
          [s.large]: large,
          [s.grey]: grey,
        },
        'font-w-700 fint-s-large select-none'
      )}
      onClick={!disable ? onClick : () => null }
    >
      {title}
    </div>
  )
}

export default Button
