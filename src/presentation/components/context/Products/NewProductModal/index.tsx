import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button } from '@presentation/components/structure'
import Modal from '@presentation/components/structure/Modal'
import { useModalContext, useProductsContext } from '@presentation/contexts'
import { useForm } from 'react-hook-form'

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

export const NewProductModal: React.FC = () => {
  const { isOpenNewProduct, handleCloseNewProduct } = useModalContext()
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { addNewProduct } = useProductsContext()

  const onSubmit = (data: any) => {
    addNewProduct(data)
    handleCloseNewProduct()
    reset()
  }

  return (
    <Modal isOpen={isOpenNewProduct} onClose={() => handleCloseNewProduct()}>
      <Box sx={style}>
        <Typography>Novo produto</Typography>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Label>Nome</S.Label>
          <S.InputText
            {...register('name', { required: true })}
            placeholder="informe o nome do produto"
          />
          <S.Error>{errors?.name ? 'Campo obrigatório' : ''}</S.Error>
          <S.Label>Valor</S.Label>
          <S.InputText
            {...register('price', {
              required: true,
              pattern: {
                value: /^[1-9]\d*(,\d+)?$/g,
                message: 'Número inválido',
              },
            })}
            placeholder="informe do valor do produto"
          />
          <S.Error>
            {errors?.price
              ? errors?.price?.message?.toString() || 'Campo obrigatório'
              : ''}
          </S.Error>
          <S.Label>Grupo</S.Label>
          <S.InputText
            {...register('group', { required: true })}
            placeholder="informe o grupo do produto"
          />
          <S.Error>{errors?.group ? 'Campo obrigatório' : ''}</S.Error>
          <S.Label>Descrição</S.Label>
          <S.TextArea
            {...register('description', { required: true })}
            placeholder="adicione uma descrição para o produto"
            rows={8}
          />
          <S.Error>{errors?.description ? 'Campo obrigatório' : ''}</S.Error>

          <S.Row>
            <S.ActionWrapper>
              <Button type="submit">Cadastrar</Button>
            </S.ActionWrapper>
          </S.Row>
        </S.Form>
      </Box>
    </Modal>
  )
}
