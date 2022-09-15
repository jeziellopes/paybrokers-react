import SignInForm from '@presentation/components/context/SignInForm'
import { useAuthContext } from '@presentation/contexts'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

export const SignIn: React.FC = () => {
  const { loading, isAuthenticated } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate('/')
    }
  }, [loading, isAuthenticated])

  return (
    <S.Container>
      <SignInForm />
    </S.Container>
  )
}
