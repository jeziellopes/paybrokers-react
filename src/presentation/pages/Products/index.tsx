import React, { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthContext } from '../../contexts'
import * as S from './styles'

export const Products = () => {
  const { isAuthenticated } = useAuthContext()
  const navigate = useNavigate()

  const checkAuth = useCallback(() => {
    if (isAuthenticated) return
    navigate('/sign-in')
  }, [isAuthenticated])

  // Auth redirect
  useEffect(() => checkAuth())

  return <S.Container>PRODUCTS</S.Container>
}
