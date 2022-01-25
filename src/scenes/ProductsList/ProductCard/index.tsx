import React, { useState } from 'react'
import c from 'classnames'
import s from './style.module.sass'
import Button from 'components/Button'
import removeProduct from 'store/actions/removeProduct'
import { useDispatch } from 'react-redux'
import getProducts from 'store/actions/getProducts'

interface I {
  data: ServerProduct
}

const ProductCard: React.FC<I> = ({ data }) => {
  const [dis, setDis] = useState(false)
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeProduct(data.id))
    setDis(true)
  }

  return (
    <div className={c(s.Card, 'mv-1 p-1')}>
      <p>{data.productTitle['en-US']}</p>
      <div className={s.right}>
        <Button disable={dis} small title='DELETE' grey onClick={() => handleRemove()}/>
        <p>{`Left: ${data.qty['en-US']}`}</p>
      </div>
    </div>
  )
}

export default ProductCard
