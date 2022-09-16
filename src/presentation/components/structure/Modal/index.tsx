import MuiModal from '@mui/material/Modal'
import { useModalContext } from '@presentation/contexts'
import * as React from 'react'

type ModalProps = {
  children: React.ReactElement
}

const Modal = ({ children }: ModalProps) => {
  const { isOpen, handleClose } = useModalContext()

  return (
    <MuiModal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </MuiModal>
  )
}

export default Modal
