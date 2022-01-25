import React, { useState } from 'react'
import c from 'classnames'
import s from './style.module.sass'
import Input from 'components/Input'
import Button from 'components/Button'
import { useFormik } from 'formik'
import TextArea from 'components/TextArea'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import createProduct from 'store/actions/createProducts'
import Page from 'components/Page'
import { AnimatePresence, motion } from 'framer-motion'

const CreateProduct: React.FC = () => {
  const dispatch = useDispatch()

  const [success, setSuccess] = useState(false)

  const ProductSchema = Yup.object().shape({
    productTitle: Yup.string()
      .min(2, 'Too Short!')
      .max(40, 'Too Long!')
      .required('Required'),
    productCode: Yup.string()
      .length(10, 'Must contain 10 characters')
      .required('Required'),
    category: Yup.string().min(2, 'Too Short').max(40).required('Required'),
    qty: Yup.number().min(0, 'At least 1').required('Required'),
    description: Yup.string().min(0).max(500),
    supplier: Yup.string().required('Required'),
    rating: Yup.string().required('Required'),
  })

  const formik = useFormik({
    initialValues: {
      productTitle: '',
      productCode: '',
      category: '',
      qty: '',
      description: '',
      supplier: 'PS',
      rating: '16+',
    },
    validationSchema: ProductSchema,
    onSubmit: (values) => {
      dispatch(createProduct(values))
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
      }, 1000);
    },
  })

  return (
    <Page>
      <div className={s.CreateBlock}>
        <AnimatePresence initial={false} exitBeforeEnter={false}>
          {success ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={s.Success}
            >
              <div>&#10003;</div>
              <p className='font-s-xlarge font-w-600 pt-2'>Successfully</p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={s.createLayer}
            >
              <div className={s.form}>
                <div className={s.inputs}>
                  <div className={c(s.title, 'mt-2')}>
                    <Input
                      placeHolder='Product title'
                      id='productTitle'
                      onChange={formik.handleChange}
                      value={formik.values.productTitle}
                      full
                      classNames='mt-2'
                      err={formik.errors.productTitle}
                    />
                  </div>
                  <div className={c(s.category, 'mt-1')}>
                    <Input
                      id='category'
                      onChange={formik.handleChange}
                      value={formik.values.category}
                      placeHolder='Category'
                      full
                      err={formik.errors.category}
                    />
                    <Input
                      id='productCode'
                      onChange={formik.handleChange}
                      value={formik.values.productCode}
                      placeHolder='Product code'
                      full
                      err={formik.errors.productCode}
                    />
                  </div>
                  <div className={s.description}>
                    <TextArea
                      id='description'
                      onChange={formik.handleChange}
                      value={formik.values.description}
                      placeHolder='Description'
                      full
                    />
                  </div>
                </div>
                <div className={c(s.checkbox, 'm-1 select-none')}>
                  <form className={s.radio} onChange={formik.handleChange}>
                    <Input
                      readOnly
                      value='PS'
                      text='PS'
                      id='supplier'
                      type='radio'
                      checked={'PS' == formik.values.supplier}
                    />
                    <Input
                      readOnly
                      value='XBOX'
                      text='XBOX'
                      id='supplier'
                      type='radio'
                      checked={'XBOX' == formik.values.supplier}
                    />
                    <Input
                      readOnly
                      value='PC'
                      text='PC'
                      id='supplier'
                      type='radio'
                      checked={'PC' == formik.values.supplier}
                    />
                  </form>
                  <select
                    name='color'
                    className={s.select}
                    onChange={(e) => (formik.values.rating = e.target.value)}
                  >
                    <option id='rating' value='16+' label='16+' />
                    <option id='rating' value='18+' label='18+' />
                    <option id='rating' value='21+' label='21+' />
                  </select>
                </div>
                <div className={c(s.submit, 'p-1')}>
                  <Input
                    type='number'
                    id='qty'
                    onChange={formik.handleChange}
                    value={formik.values.qty}
                    placeHolder='Qty'
                    err={formik.errors.qty}
                  />
                  <Button title='SEND' middle onClick={formik.handleSubmit} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Page>
  )
}

export default CreateProduct
