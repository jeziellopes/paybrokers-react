import { withLayout } from '@presentation/components/context/Layout'
import { ProductsTable } from '@presentation/components/context/Products/ProdutsTable'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthContext } from '../../contexts'
import * as S from './styles'

export const Products = () => {
  const { isAuthenticated } = useAuthContext()
  const navigate = useNavigate()
  // const { loading, products } = useProductsContext()

  // Auth redirect
  useEffect(() => {
    if (isAuthenticated) return
    navigate('/sign-in')
  })

  return (
    <S.Container>
      <ProductsTable />
    </S.Container>
  )
}

export default withLayout(Products)
