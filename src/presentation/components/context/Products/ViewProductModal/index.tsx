import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@presentation/components/structure/Modal'
import { useModalContext, useProductsContext } from '@presentation/contexts'

import * as S from './styles'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '8px',
  p: 8,
}

export const ViewProductModal: React.FC = () => {
  const { selected, cleanUpSelectedProduct } = useProductsContext()
  const { isOpenViewProduct, handleCloseViewProduct } = useModalContext()

  return (
    selected && (
      <Modal
        isOpen={isOpenViewProduct}
        onClose={() => {
          handleCloseViewProduct()
          cleanUpSelectedProduct()
        }}
      >
        <Box sx={style}>
          <Typography>Detalhes do produto</Typography>

          <S.Label>Nome</S.Label>
          <S.InputText value={selected?.name} disabled />

          <S.Label>Valor</S.Label>
          <S.InputText value={selected?.price} disabled />

          <S.Label>Grupo</S.Label>
          <S.InputText value={selected?.group} disabled />

          <S.Label>Descrição</S.Label>
          <S.TextArea value={selected?.description} rows={8} disabled />
        </Box>
      </Modal>
    )
  )
}
