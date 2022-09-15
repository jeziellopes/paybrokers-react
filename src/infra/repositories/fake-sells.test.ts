import { SellModel } from '@data/models'

import { FakeSellsLoaderRepository } from '.'

describe('Repositories', () => {
  test('Sell loader repository instance', () => {
    const sut = new FakeSellsLoaderRepository()
    expect(sut).toBeInstanceOf(FakeSellsLoaderRepository)
  })

  test('Sells loader repository load Sells', async () => {
    const fakeRepo = new FakeSellsLoaderRepository()
    const sut = await fakeRepo.loadSells()
    expect(sut).toBeInstanceOf(Array<SellModel>)
  })
})
