import React from 'react'

import * as S from './styles'

type FormProps = {
  children: React.ReactElement[]
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

export const Form = ({ children, ...props }: FormProps) => {
  return <S.Form {...props}>{children}</S.Form>
}
