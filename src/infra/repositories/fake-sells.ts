import { SellsLoaderRepository } from '@data/contracts'
import { SellModel } from '@data/models'
import { sells as fakeSells } from '@infra/datasources'

export class FakeSellsLoaderRepository implements SellsLoaderRepository {
  async loadSells(): Promise<SellModel[]> {
    return Promise.resolve(fakeSells)
  }
}
