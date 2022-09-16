import DeleteIcon from '@mui/icons-material/Delete'
import DescriptionIcon from '@mui/icons-material/Description'
import { GridRenderCellParams } from '@mui/x-data-grid'
import { useModalContext, useProductsContext } from '@presentation/contexts'
import React from 'react'

import * as S from './styles'

type ProductsActionsProps = {
  params: GridRenderCellParams<any, any, any>
}

const ProductsActions = ({ params }: ProductsActionsProps) => {
  const { onClickRemove, selectProduct } = useProductsContext()
  const { handleOpen: handleOpenModal } = useModalContext()

  const onClickDescription = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    handleOpenModal()
    selectProduct(params.id.toString())
  }

  const onClickDelete = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    onClickRemove(params.id.toString())
  }

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
