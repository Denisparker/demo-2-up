import _ from 'lodash'
import { AnyAction } from 'redux'
import * as t from './actions/types'

let preloadedProducts = null

if (typeof window !== 'undefined') {
  preloadedProducts = localStorage.getItem('products')
}

const initialState: StateValue = {
  errors: {},
  loadings: [],
  products: [],
}

export function reducer(state = initialState, { type, payload }: AnyAction) {
  switch (type) {
    /// Loading and Errors
    case t.ADD_LOADING:
      return {
        ...state,
        loadings: _.uniq([...state.loadings, payload]),
      }
    case t.REMOVE_LOADING:
      return {
        ...state,
        loadings: state.loadings.filter((item) => item !== payload),
      }
    case t.ADD_ERROR: {
      const errorKey = Object.keys(payload)[0]
      const newErrors = { ...state.errors }
      newErrors[errorKey] = payload[errorKey]

      return {
        ...state,
        errors: newErrors,
      }
    }
    case t.REMOVE_ERROR: {
      const errorKey = payload
      const newErrors = { ...state.errors }
      delete newErrors[errorKey]

      return {
        ...state,
        errors: newErrors,
      }
    }
    ///
    case t.SET_PRODUCTS: {
      return {
        ...state, 
        products: payload
      }
    }
    ///
    default:
      return state
  }
}
