import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TextField } from '@presentation/components/structure'
import Modal from '@presentation/components/structure/Modal'
import { useProductsContext } from '@presentation/contexts'

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
  const { selected } = useProductsContext()

  return (
    selected && (
      <Modal>
        <Box sx={style}>
          <Typography>Detalhes do produto</Typography>
          <TextField label="nome" value={selected?.name} disabled />
          <TextField label="valor" value={selected?.price} disabled />
          <TextField label="grupo" value={selected?.group} disabled />
          <TextField
            label="descrição"
            value={selected?.description}
            multiline
            disabled
          />
        </Box>
      </Modal>
    )
  )
}
