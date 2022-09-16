import { loadSells } from '@presentation/useCases'
import { bySellDate } from '@presentation/utils/sort'
import {
  byCurrentMonthDate,
  dateToDayWithMonth,
} from '@presentation/utils/time'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import * as T from '../types'
import { MonthSell, Sell } from '../types'

export type SellsContextType = {
  error: boolean
  loading: boolean
  sells: Sell[] | null
  monthSellsByDay: MonthSell[] | null
}

export const SellsContext = createContext<SellsContextType>({
  error: false,
  loading: false,
  sells: null,
  monthSellsByDay: null,
})

export const SellsProvider = ({ children }: T.Props) => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sells, setSells] = useState<Sell[] | null>(null)

  useEffect(() => {
    if (sells) return
    setLoading(true)
    fetchSells()
  })

  const fetchSells = async () => {
    await loadSells()
      .then((sells) =>
        setSells(
          sells.map((sell) => ({
            ...sell,
            quantidade: sell.quantity,
            sellDate: sell.sellDate,
            sellDateFormatted: dateToDayWithMonth(sell.sellDate),
          }))
        )
      )
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }

  const monthSellsByDay = useMemo(
    () =>
      Array.from(
        Object.values(sells || [])
          .sort(bySellDate)
          .filter((sell) => byCurrentMonthDate(sell.sellDate))
          .reduce(
            (acc, elm) =>
              acc.set(
                elm.sellDateFormatted,
                (acc.get(elm.sellDateFormatted) || 0) + elm.quantidade
              ),
            new Map()
          ),
        ([sellDateFormatted, quantidade]) => ({
          sellDateFormatted,
          quantidade,
        })
      ),
    [sells]
  )

  return (
    <SellsContext.Provider value={{ error, loading, sells, monthSellsByDay }}>
      {children}
    </SellsContext.Provider>
  )
}

export const useSellsContext = () => useContext(SellsContext)
