import { FakeProductsLoader } from '@data/usecases'
import { ProductsLoader } from '@domain/usecases/products-loader'
import { FakeProductsLoaderRepository } from '@infra/repositories'

export const makeProductsLoader = (): ProductsLoader =>
  new FakeProductsLoader(new FakeProductsLoaderRepository())
