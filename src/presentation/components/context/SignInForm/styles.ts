import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.main.background};
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
`

export const Logo = styled.img`
  margin: 24px 0;
`

export const Form = styled.form`
  background: ${({ theme }) => theme.colors.main.background};
  /* border: 2px ${({ theme }) => theme.colors.main.primary} solid; */
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.form};
  padding: 24px;
  width: 500px;

  @media only screen and (max-width: 700px) {
    width: 100vw;
    border: none;
    box-shadow: none;
  }
`

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px 0 0;
  width: 100%;
`
