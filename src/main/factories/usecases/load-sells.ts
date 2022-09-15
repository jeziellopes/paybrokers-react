import { FakeSellsLoader } from '@data/usecases'
import { SellsLoader } from '@domain/usecases'
import { FakeSellsLoaderRepository } from '@infra/repositories'

export const makeSellsLoader = (): SellsLoader =>
  new FakeSellsLoader(new FakeSellsLoaderRepository())
