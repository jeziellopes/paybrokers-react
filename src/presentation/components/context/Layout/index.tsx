import { logoUrl } from '@presentation/assets'
import { useAuthContext } from '@presentation/contexts'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

export const withLayout = (WrappedComponent: any) => {
  return function LayoutProvider({ ...props }) {
    const { logout } = useAuthContext()
    const navigate = useNavigate()
    return (
      <>
        <S.Header>
          <S.Logo src={logoUrl} />
          <S.Profile>Jeziel Carvalho</S.Profile>
        </S.Header>
        <S.Body>
          <S.Aside>
            <S.Menu>
              <S.MenuItem onClick={() => navigate('/')}>Dashboard</S.MenuItem>
              <S.MenuItem onClick={() => navigate('/products')}>
                Produtos
              </S.MenuItem>
              <S.MenuItem onClick={() => logout()}>Logout</S.MenuItem>
            </S.Menu>
          </S.Aside>
          <WrappedComponent {...props} />
        </S.Body>
      </>
    )
  }
}
