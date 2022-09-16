import React from 'react'
import { FieldError, Merge, FieldErrorsImpl } from 'react-hook-form'

import * as S from './styles'

type TextInputProps = {
  name?: string
  label: string
  value?: string
  multiline?: boolean
  disabled?: boolean
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>
}

export const TextField = ({
  label,
  value,
  multiline,
  disabled,
  error,
  ...props
}: TextInputProps) => {
  return multiline ? (
    <textarea value={value} {...props} disabled={disabled} />
  ) : (
    <S.Container>
      <S.InputText placeholder={label} disabled={disabled} {...props} />
      {error ? <S.Error>This field is required</S.Error> : <></>}
    </S.Container>
  )
}
