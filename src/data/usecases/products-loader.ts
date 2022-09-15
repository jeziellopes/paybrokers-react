import { ProductsLoaderRepository } from '@data/contracts/products-loader-repository'
import { ProductsLoader } from '@domain/usecases/products-loader'

export class FakeProductsLoader implements ProductsLoader {
  constructor(private readonly productRepository: ProductsLoaderRepository) {}

  load() {
    return this.productRepository.loadProducts()
  }
}
