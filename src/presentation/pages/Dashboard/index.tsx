import { ProductsChart, SellsChart } from '@presentation/components/context'
import { withLayout } from '@presentation/components/context/Layout'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthContext } from '../../contexts'
import * as S from './styles'

const Dashboard: React.FC = () => {
  const { isAuthenticated } = useAuthContext()
  const navigate = useNavigate()

  // Auth redirect
  useEffect(() => {
    if (isAuthenticated) return
    navigate('/sign-in')
  })

  return (
    <S.Container>
      <ProductsChart title="Quantidade de Produtos Por Grupo" />
      <SellsChart title="Total de Vendas Por Dia" />
    </S.Container>
  )
}

export default withLayout(Dashboard)
