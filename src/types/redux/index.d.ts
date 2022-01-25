declare type StateValue = {
  errors: { [key: string]: string }
  loadings: string[]
  products: ServerProduct[]
}

declare type Product = {
  productTitle: string
  productCode: string
  category: string
  qty: string
  description: string
  supplier: string
  rating: string
}

declare type ServerProduct = {
  productTitle: {
    'en-US': string
  }
  productCode: {
    'en-US': string
  }
  category: {
    'en-US': string
  }
  description: {
    'en-US': string
  }
  qty: {
    'en-US': string
  }
  supplier: {
    'en-US': string
  }
  rating: {
    'en-US': string
  }
  id: string
}
