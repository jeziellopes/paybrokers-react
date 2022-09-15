import { logoUrl } from '@presentation/assets'
import { useAuthContext } from '@presentation/contexts'
import React from 'react'

import * as CF from '../../form'
import * as CS from '../../structure'
import * as S from './styles'

const SignInForm: React.FC = () => {
  const { loading, authenticate } = useAuthContext()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Row>
        <S.Logo src={logoUrl} />
      </S.Row>
      <CF.InputText placeholder="informe seu e-mail"></CF.InputText>
      <CF.InputText placeholder="informe sua senha"></CF.InputText>
      <CF.Link to="/sign-in">Esqueci a senha</CF.Link>
      <S.ActionWrapper>
        <CS.Button onClick={() => authenticate()}>
          {loading ? 'Loading...' : 'Login'}
        </CS.Button>
      </S.ActionWrapper>
    </S.Form>
  )
}

export default React.memo(SignInForm)
