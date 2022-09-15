import { loadSells } from '@presentation/useCases'
import { createContext, useContext, useEffect, useState } from 'react'

import * as T from '../types'
import { Sell } from '../types'

export type SellsContextType = {
  loading: boolean
  sells: Sell[] | null
}

export const SellsContext = createContext<SellsContextType>({
  loading: false,
  sells: null,
})

export const SellsProvider = ({ children }: T.Props) => {
  const [loading, setLoading] = useState(false)
  const [sells, setSells] = useState<Sell[] | null>(null)

  useEffect(() => {
    if (sells) return
    setLoading(true)
    const loadedSells = loadSells()
    console.log({ loadedSells })
    setSells(loadedSells)
    setLoading(false)
  })

  return (
    <SellsContext.Provider value={{ loading, sells }}>
      {children}
    </SellsContext.Provider>
  )
}

export const useSellsContext = () => useContext(SellsContext)
