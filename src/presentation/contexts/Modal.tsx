import React, { createContext, useContext, useState } from 'react'

import * as T from '../types'

export type ModalContextType = {
  isOpenViewProduct: boolean
  isOpenNewProduct: boolean
  handleOpenViewProduct: () => void
  handleCloseViewProduct: () => void
  handleOpenNewProduct: () => void
  handleCloseNewProduct: () => void
}

export const ModalContext = createContext<ModalContextType>({
  isOpenViewProduct: false,
  isOpenNewProduct: false,
  handleOpenViewProduct: () => undefined,
  handleCloseViewProduct: () => undefined,
  handleOpenNewProduct: () => undefined,
  handleCloseNewProduct: () => undefined,
})

export const ModalProvider = ({ children }: T.Props) => {
  const [isOpenViewProduct, setIsOpenViewProduct] = useState(false)
  const [isOpenNewProduct, setIsOpenNewProduct] = useState(false)

  const handleOpenViewProduct = () => setIsOpenViewProduct(true)
  const handleCloseViewProduct = () => setIsOpenViewProduct(false)

  const handleOpenNewProduct = () => setIsOpenNewProduct(true)
  const handleCloseNewProduct = () => setIsOpenNewProduct(false)

  return (
    <ModalContext.Provider
      value={{
        isOpenViewProduct,
        isOpenNewProduct,
        handleOpenViewProduct,
        handleCloseViewProduct,
        handleOpenNewProduct,
        handleCloseNewProduct,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => useContext(ModalContext)
