import MuiTextField from '@mui/material/TextField'
import React from 'react'

type TextInputProps = {
  label: string
  value?: string
  multiline?: boolean
  disabled?: boolean
}

export const TextField = ({
  label,
  value,
  multiline,
  disabled,
}: TextInputProps) => {
  return (
    <MuiTextField
      fullWidth
      label={label}
      id="fullWidth"
      margin="normal"
      variant="filled"
      value={value}
      multiline={multiline}
      maxRows={4}
      rows={4}
      disabled={disabled}
    />
  )
}
