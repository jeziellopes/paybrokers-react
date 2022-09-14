import React, { createContext, useContext, useState } from 'react'

import * as T from '../types'

export type AuthContextType = {
  isAuthenticated: boolean
  authenticate: () => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  authenticate: () => undefined,
  logout: () => undefined,
})

export const AuthProvider = ({ children }: T.Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const authenticate = () => setIsAuthenticated(true)

  const logout = () => setIsAuthenticated(false)

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
