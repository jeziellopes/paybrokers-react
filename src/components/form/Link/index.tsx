import React from 'react'
import { Link as BaseLink } from 'react-router-dom'

import * as S from './styles'

export const Link = ({ children, ...props }: any) => {
  return (
    <S.Container>
      <BaseLink {...props}>{children}</BaseLink>
    </S.Container>
  )
}
