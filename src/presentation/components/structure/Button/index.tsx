import React from 'react'

import * as T from '../../../types'
import * as S from './styles'

export const Button = ({ onClick, ...props }: T.Props) => {
  return <S.Button onClick={onClick} {...props} />
}
