import { useSellsContext } from '@presentation/contexts'
import * as T from '@presentation/types/chart'
import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import * as S from '../styles'
import { Title } from '../styles'

export const SellsChart = ({ title }: T.ChartProps) => {
  const { loading, monthSellsByDay } = useSellsContext()

  return loading ? (
    <p>loading...</p>
  ) : (
    <S.Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={monthSellsByDay || []}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sellDateFormatted" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantidade" label={'AAA'} fill="#55bcb6" />
        </BarChart>
      </ResponsiveContainer>
    </S.Container>
  )
}
