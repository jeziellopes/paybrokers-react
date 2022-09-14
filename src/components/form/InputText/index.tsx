import React from 'react'

import * as S from './styles'

export const InputText = ({ children, ...props }: any) => {
  return (
    <S.InputText {...props} autoComplete="off">
      {children}
    </S.InputText>
  )
}
