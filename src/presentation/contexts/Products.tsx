import { loadProducts } from '@presentation/useCases'
import { createContext, useContext, useEffect, useState } from 'react'

import * as T from '../types'
import { Product } from '../types'

export type ProductsContextType = {
  loading: boolean
  products: Product[] | null
}

export const ProductsContext = createContext<ProductsContextType>({
  loading: false,
  products: null,
})

export const ProductsProvider = ({ children }: T.Props) => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<Product[] | null>(null)

  useEffect(() => {
    if (products) return
    setLoading(true)
    const loadedProducts = loadProducts()
    console.log({ loadedProducts })
    setProducts(loadedProducts)
    setLoading(false)
  })

  return (
    <ProductsContext.Provider value={{ loading, products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => useContext(ProductsContext)
