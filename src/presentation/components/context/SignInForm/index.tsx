import { logoUrl } from '@presentation/assets'
import { useAuthContext } from '@presentation/contexts'
import React from 'react'

import * as CF from '../../form'
import * as CS from '../../structure'
import * as S from './styles'

const SignInForm: React.FC = () => {
  const { error, loading, authenticate, handleChangeLogin } = useAuthContext()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Row>
        <S.Logo src={logoUrl} />
      </S.Row>
      <CF.InputText
        name="email"
        placeholder="informe seu e-mail"
        defaultValue="admin@paybrokers.com.br"
        onChange={handleChangeLogin}
      ></CF.InputText>
      <CF.InputText
        name="password"
        type="password"
        placeholder="informe sua senha"
        defaultValue="123456"
        onChange={handleChangeLogin}
      ></CF.InputText>
      <CF.Link to="/sign-in">Esqueci a senha</CF.Link>
      <S.ActionWrapper>
        <CS.Button onClick={() => authenticate()}>
          {loading ? 'Loading...' : 'Login'}
        </CS.Button>
      </S.ActionWrapper>
      <S.Error>{error ? 'Usuário ou senha incorretos' : ''}</S.Error>
    </S.Form>
  )
}

export default React.memo(SignInForm)
