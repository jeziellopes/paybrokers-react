import { AUTH_KEY } from '@main/config'

export const checkAuth = () => Boolean(sessionStorage.getItem(AUTH_KEY))

export const logout = () => sessionStorage.removeItem(AUTH_KEY)

export const authenticate = () => sessionStorage.setItem(AUTH_KEY, 'true')
