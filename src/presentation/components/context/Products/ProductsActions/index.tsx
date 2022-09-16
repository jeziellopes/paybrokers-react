import DeleteIcon from '@mui/icons-material/Delete'
import DescriptionIcon from '@mui/icons-material/Description'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { useProductsContext } from '@presentation/contexts'
import React from 'react'

import * as S from './styles'

type ProductsActionsProps = {
  params: GridRenderCellParams<any, any, any>
}

const ProductsActions = ({ params }: ProductsActionsProps) => {
  const { onClickRemove } = useProductsContext()

  const onClickDescription = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    console.log(`description clicked`, params)
  }

  const onClickDelete = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    console.log(`delete clicked`, params.id)
    onClickRemove(params.id.toString())
  }

  console.log({ params })

  return (
    <S.Container>
      <S.ActionWrapper onClick={onClickDescription}>
        <DescriptionIcon color="primary" />
      </S.ActionWrapper>
      <S.ActionWrapper onClick={onClickDelete}>
        <DeleteIcon color="error" />
      </S.ActionWrapper>
    </S.Container>
  )
}

export default ProductsActions
