import { ProductsLoaderRepository } from '@data/contracts'
import { ProductModel } from '@data/models'
import { products as fakeProducts } from '@infra/datasources'

export class FakeProductsLoaderRepository implements ProductsLoaderRepository {
  async loadProducts(): Promise<ProductModel[]> {
    return Promise.resolve(fakeProducts)
  }
}
