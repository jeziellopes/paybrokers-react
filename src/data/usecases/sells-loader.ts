import { SellsLoaderRepository } from '@data/contracts'
import { SellsLoader } from '@domain/usecases'

export class FakeSellsLoader implements SellsLoader {
  constructor(private readonly sellRepository: SellsLoaderRepository) {}

  load() {
    return this.sellRepository.loadSells()
  }
}
