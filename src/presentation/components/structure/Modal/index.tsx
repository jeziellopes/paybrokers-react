import MuiModal from '@mui/material/Modal'
import * as React from 'react'

type ModalProps = {
  children: React.ReactElement
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  return (
    <MuiModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </MuiModal>
  )
}

export default Modal
