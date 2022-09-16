import { Sell } from '@presentation/types'

export const bySellDate = (a: Sell, b: Sell) =>
  a.sellDate > b.sellDate ? 1 : a.sellDate < b.sellDate ? -1 : 0
