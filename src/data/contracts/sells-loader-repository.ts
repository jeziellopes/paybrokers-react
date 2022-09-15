import { SellModel } from '../models'

export interface SellsLoaderRepository {
  loadSells: () => Promise<SellModel[]>
}
