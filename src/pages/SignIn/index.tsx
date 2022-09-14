import React from 'react'

import * as CF from '../../components/form'
import * as CS from '../../components/structure'
import * as S from './styles'

export const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Form>
        <S.Row>
          <S.Logo src="https://www.paybrokers.com.br/uploads/Grupo%2037.png" />
        </S.Row>
        <CF.InputText placeholder="informe seu e-mail"></CF.InputText>
        <CF.InputText placeholder="informe sua senha"></CF.InputText>
        <CF.Link to="/sign-in">Esqueci a senha</CF.Link>
        <S.ActionWrapper>
          <CS.Button>Login</CS.Button>
        </S.ActionWrapper>
      </S.Form>
    </S.Container>
  )
}
