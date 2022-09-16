import { Sell } from '@domain/entities'

export interface SellsLoader {
  load: () => Promise<SellsLoader.Model[]>
}

export namespace SellsLoader {
  export type Model = Sell
}
