import { SellModel } from '@data/models'
import { makeSellsLoader } from '@main/factories/usecases'

export const loadSells = (): SellModel[] => {
  const sellsLoader = makeSellsLoader()
  return sellsLoader.load()
}
