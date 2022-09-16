import { correctLogin } from '@main/config'
import * as sessionAuth from '@presentation/lib'
import React, { createContext, useCallback, useContext, useState } from 'react'

import * as T from '../types'

export type AuthContextType = {
  error: boolean
  login: T.LoginData
  loading: boolean
  isAuthenticated: boolean
  authenticate: () => void
  logout: () => void
  handleChangeLogin: (e: any) => void
}

export const AuthContext = createContext<AuthContextType>({
  error: false,
  login: {} as T.LoginData,
  loading: false,
  isAuthenticated: false,
  authenticate: () => undefined,
  logout: () => undefined,
  handleChangeLogin: () => undefined,
})

export const AuthProvider = ({ children }: T.Props) => {
  const [error, setError] = useState(false)
  const [login, setLogin] = useState(correctLogin)
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionAuth.checkAuth()
  )

  const loginFailed = useCallback(() => {
    const failed =
      login.email !== correctLogin.email ||
      login.password !== correctLogin.password

    if (failed) {
      setError(true)
    }

    return failed
  }, [login])

  const logout = () => {
    setLoading(true)
    sessionAuth.logout()
    setIsAuthenticated(false)
    setLoading(false)
  }

  const authenticate = () => {
    setError(false)
    if (loginFailed()) return
    setLoading(true)
    sessionAuth.authenticate()
    setIsAuthenticated(sessionAuth.checkAuth())
    setTimeout(() => setLoading(false), 1000)
  }

  const handleChangeLogin = (e: any) =>
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))

  return (
    <AuthContext.Provider
      value={{
        error,
        loading,
        isAuthenticated,
        authenticate,
        logout,
        handleChangeLogin,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
