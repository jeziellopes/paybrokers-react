import { ProductModel } from '../models'

export interface ProductsLoaderRepository {
  loadProducts: () => Promise<ProductModel[]>
}
