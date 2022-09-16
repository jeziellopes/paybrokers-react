import { SellModel } from '@data/models'
import { makeSellsLoader } from '@main/factories/usecases'

export const loadSells = async (): Promise<SellModel[]> => {
  const sellsLoader = makeSellsLoader()
  return sellsLoader.load()
}
