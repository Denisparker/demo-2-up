import axios from 'axios'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { SET_PRODUCTS } from './types'

export default function getProducts(): ThunkAction<
  Promise<void>,
  StateValue,
  unknown,
  AnyAction
> {
  return async (dispatch) => {
    const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

    axios
      .get(
        `https://api.contentful.com/spaces/${spaceId}/environments/master/entries`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        const data = res.data.items.map((i: any) => ({...i.fields, id: i.sys.id}))
        dispatch({ type: SET_PRODUCTS, payload: data })
      })
  }
}
