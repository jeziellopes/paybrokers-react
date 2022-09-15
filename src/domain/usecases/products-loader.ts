import { Product } from '@domain/entities'

export interface ProductsLoader {
  load: () => ProductsLoader.Model[]
}

export namespace ProductsLoader {
  export type Model = Product
}
