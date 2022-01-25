import React, { ChangeEvent } from 'react'
import c from 'classnames'
import s from './style.module.sass'

interface I {
  placeHolder?: string
  id?: string
  middle?: boolean
  large?: boolean
  full?: boolean
  value?: string
  classNames?: string
  onChange: (e: string | ChangeEvent<any>) => void
}

const Input: React.FC<I> = ({
  placeHolder,
  id,
  value,
  middle,
  large,
  full,
  onChange,
}) => {
  return (
    <textarea
      id={id}
      className={c(
        s.TextArea,
        {
          [s.middle]: middle,
          [s.large]: large,
          [s.full]: full,
        },
        'font-s-large p-05'
      )}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
