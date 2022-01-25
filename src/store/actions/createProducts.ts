import axios from 'axios'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { addLoading, removeError, removeLoading } from '.'

export default function createProduct(
  values: Product
): ThunkAction<Promise<void>, StateValue, unknown, AnyAction> {
  return async (dispatch) => {
    const entry = 'createProduct'

    const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

    dispatch(removeError(entry))
    dispatch(addLoading(entry))

    const json = JSON.stringify({
      fields: {
        productTitle: {
          'en-US': values.productTitle,
        },
        productCode: {
          'en-US': values.productCode,
        },
        category: {
          'en-US': values.category,
        },
        description: {
          'en-US': values.description,
        },
        qty: {
          'en-US': values.qty,
        },
        supplier: {
          'en-US': values.supplier,
        },
        rating: {
          'en-US': values.rating,
        },
      },
    })

    axios
      .post(
        `https://api.contentful.com/spaces/${spaceId}/environments/master/entries`,
        json,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/vnd.contentful.management.v1+json',
            'X-Contentful-Content-Type': 'product',
          },
        }
      )
      .then((res) => {
        const data = res.data
      })

    dispatch(removeLoading(entry))
  }
}
