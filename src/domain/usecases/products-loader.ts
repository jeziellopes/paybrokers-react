import { Product } from '@domain/entities'

export interface ProductsLoader {
  load: () => Promise<ProductsLoader.Model[]>
}

export namespace ProductsLoader {
  export type Model = Product
}
