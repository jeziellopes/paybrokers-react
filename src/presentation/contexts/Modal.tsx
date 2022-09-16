import React, { createContext, useContext, useState } from 'react'

import * as T from '../types'

export type ModalContextType = {
  isOpen: boolean
  handleOpen: () => void
  handleClose: () => void
}

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  handleOpen: () => undefined,
  handleClose: () => undefined,
})

export const ModalProvider = ({ children }: T.Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)

  const handleClose = () => setIsOpen(false)

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => useContext(ModalContext)
