import React, { useEffect } from 'react'
import c from 'classnames'
import s from './style.module.sass'
import Page from 'components/Page'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import getProducts from 'store/actions/getProducts'
import { SET_PRODUCTS } from 'store/actions/types'

const ProductsList: React.FC = () => {
  const dispatch = useDispatch()

  const list = useSelector(({ products }: StateValue) => products)

  useEffect(() => {
    dispatch(getProducts())
    return () => {
      dispatch({ type: SET_PRODUCTS, payload: [] })
    }
  }, [])

  list.map((i) => console.log(i.productTitle))
  return (
    <Page>
      <div className={s.Block}>
        <div className={c(s.List, 'p-1')}>
        {list.map((i) => (
          <ProductCard key={i.id} data={i} />
        ))}</div>
      </div>
    </Page>
  )
}

export default ProductsList
