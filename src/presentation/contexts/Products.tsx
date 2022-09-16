import { loadProducts } from '@presentation/useCases'
import { generateID } from '@presentation/utils/uuid'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import * as T from '../types'
import { Product } from '../types'

export type ProductsContextType = {
  error: boolean
  loading: boolean
  products: Product[] | null
  selected: Product | null
  productQuantityByGroup: T.ProductQuantityByGroup[] | null
  onClickRemove: (id: string) => void
  selectProduct: (id: string) => void
  cleanUpSelectedProduct: () => void
  addNewProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void
}

export const ProductsContext = createContext<ProductsContextType>({
  error: false,
  loading: false,
  products: null,
  selected: null,
  productQuantityByGroup: null,
  onClickRemove: () => undefined,
  selectProduct: () => undefined,
  cleanUpSelectedProduct: () => undefined,
  addNewProduct: () => undefined,
})

export const ProductsProvider = ({ children }: T.Props) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<Product[] | null>(null)
  const [selected, setSelected] = useState<Product | null>(null)

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

  const onClickRemove = (id: string) =>
    setProducts((prev) => prev?.filter((product) => product.id !== id) || [])

  const selectProduct = useCallback(
    (id: string) =>
      setSelected(products?.find((product) => product.id === id) || null),
    [products]
  )

  const cleanUpSelectedProduct = () => setSelected(null)

  const addNewProduct = (product: T.NewProduct) => {
    setProducts((prev) => [
      ...(prev || []),
      {
        ...product,
        id: generateID(),
        createdAt: Date.now(),
      },
    ])
  }

  return (
    <ProductsContext.Provider
      value={{
        error,
        loading,
        products,
        selected,
        productQuantityByGroup,
        onClickRemove,
        selectProduct,
        cleanUpSelectedProduct,
        addNewProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => useContext(ProductsContext)
