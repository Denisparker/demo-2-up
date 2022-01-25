import React, { ChangeEvent } from 'react'
import c from 'classnames'
import s from './style.module.sass'

interface I {
  placeHolder?: string
  id?: string
  type?: string
  middle?: boolean
  large?: boolean
  full?: boolean
  value?: string
  classNames?: string
  err?: string
  text?: string
  checked?: boolean
  readOnly?: boolean
  onChange?: (e: string | ChangeEvent<any>) => void
}

const Input: React.FC<I> = ({
  placeHolder,
  id,
  type,
  value,
  middle,
  large,
  full,
  onChange,
  err,
  checked,
  readOnly,
  text,
}) => {
  return (
    <div className={s.inpBlock}>
      <div className={s.inpFlex}>
        <input
          readOnly={readOnly}
          id={id}
          className={c(
            s.Input,
            {
              [s.middle]: middle,
              [s.large]: large,
              [s.full]: full,
            },
            'font-s-large p-05'
          )}
          type={type}
          placeholder={placeHolder}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <p>{text}</p>
      </div>
      <p className={c(s.err, 'mt-05')}>{err}</p>
    </div>
  )
}

export default Input
