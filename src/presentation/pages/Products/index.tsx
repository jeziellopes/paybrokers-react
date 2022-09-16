import {
  ViewProductModal,
  withLayout,
  ProductsTable,
  NewProductModal,
} from '@presentation/components/context'
import { Button } from '@presentation/components/structure'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthContext, useModalContext } from '../../contexts'
import * as S from './styles'

export const Products = () => {
  const { isAuthenticated } = useAuthContext()
  const { handleOpenNewProduct } = useModalContext()
  const navigate = useNavigate()
  // const { loading, products } = useProductsContext()

  // Auth redirect
  useEffect(() => {
    if (isAuthenticated) return
    navigate('/sign-in')
  })

  return (
    <S.Container>
      <S.NewProductWrapper>
        <Button onClick={() => handleOpenNewProduct()}>
          Cadastrar Produto
        </Button>
      </S.NewProductWrapper>
      <ProductsTable />
      <ViewProductModal />
      <NewProductModal />
    </S.Container>
  )
}

export default withLayout(Products)
