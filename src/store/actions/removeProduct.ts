import axios from 'axios'
import { AnyAction } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { SET_PRODUCTS } from './types'

export default function removeProduct(id: string): ThunkAction<
  Promise<void>,
  StateValue,
  unknown,
  AnyAction
> {
  return async (dispatch, getState) => {
    const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

    axios
      .delete(
        `https://api.contentful.com/spaces/${spaceId}/environments/master/entries/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        dispatch({type: SET_PRODUCTS, payload: getState().products.filter(i => i.id !== id)})
      }).catch((e) => e)
  }
}