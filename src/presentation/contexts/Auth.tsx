import * as sessionAuth from '@presentation/lib'
import React, { createContext, useContext, useState } from 'react'

import * as T from '../types'

export type AuthContextType = {
  loading: boolean
  isAuthenticated: boolean
  authenticate: () => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  loading: false,
  isAuthenticated: false,
  authenticate: () => undefined,
  logout: () => undefined,
})

export const AuthProvider = ({ children }: T.Props) => {
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionAuth.checkAuth()
  )
  const { logout } = sessionAuth

  const authenticate = () => {
    setLoading(true)
    sessionAuth.authenticate()
    setIsAuthenticated(sessionAuth.checkAuth())
    setTimeout(() => setLoading(false), 1000)
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
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
