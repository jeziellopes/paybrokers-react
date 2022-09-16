import { makeProductsLoader } from '@main/factories/usecases/load-products'
import { Product } from '@presentation/types'

export const loadProducts = async (): Promise<Product[]> => {
  const productsLoader = makeProductsLoader()
  return productsLoader.load()
}
