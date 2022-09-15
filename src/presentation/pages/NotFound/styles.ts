import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.colors.main.primary};
  display: flex;
  font-family: ${({ theme }) => theme.font.primary};
  height: 100%;
  justify-content: center;
  width: 100%;

  h1 {
    font-family: ${({ theme }) => theme.font.text};
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: center;
`
