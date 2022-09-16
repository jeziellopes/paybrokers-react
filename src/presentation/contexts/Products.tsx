import { loadProducts } from '@presentation/useCases'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import * as T from '../types'
import { Product } from '../types'

export type ProductsContextType = {
  error: boolean
  loading: boolean
  products: Product[] | null
  productQuantityByGroup: T.ProductQuantityByGroup[] | null
}

export const ProductsContext = createContext<ProductsContextType>({
  error: false,
  loading: false,
  products: null,
  productQuantityByGroup: null,
})

export const ProductsProvider = ({ children }: T.Props) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<Product[] | null>(null)

  useEffect(() => {
    if (products) return
    setLoading(true)
    fetchSells()
  })

  const fetchSells = async () => {
    await loadProducts()
      .then(setProducts)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }

  const productQuantityByGroup = useMemo(() => {
    return Array.from(
      Object.values(products || []).reduce(
        (acc, elm) => acc.set(elm.group, (acc.get(elm.group) || 0) + 1),
        new Map()
      ),
      ([name, quantidade]) => ({
        name,
        quantidade,
      })
    )
  }, [products])

  return (
    <ProductsContext.Provider
      value={{ error, loading, products, productQuantityByGroup }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => useContext(ProductsContext)
