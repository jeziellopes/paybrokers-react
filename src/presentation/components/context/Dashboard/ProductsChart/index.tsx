import { useProductsContext } from '@presentation/contexts'
import * as T from '@presentation/types/chart'
import React from 'react'
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts'

import { Title } from '../styles'
import * as S from './styles'

export const ProductsChart = ({ title }: T.ChartProps) => {
  const { loading, productQuantityByGroup } = useProductsContext()

  return loading ? (
    <p>loading...</p>
  ) : (
    <S.Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="quantidade"
            isAnimationActive={false}
            data={productQuantityByGroup || []}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </S.Container>
  )
}
