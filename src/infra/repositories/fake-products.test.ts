import { ProductModel } from '@data/models'

import { FakeProductsLoaderRepository } from '.'

describe('Repositories', () => {
  test('Product loader repository instance', () => {
    const sut = new FakeProductsLoaderRepository()
    expect(sut).toBeInstanceOf(FakeProductsLoaderRepository)
  })

  test('Products loader repository load products', async () => {
    const fakeRepo = new FakeProductsLoaderRepository()
    const sut = await fakeRepo.loadProducts()
    expect(sut).toBeInstanceOf(Array<ProductModel>)
  })
})
