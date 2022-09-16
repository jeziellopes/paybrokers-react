import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.text};
  height: 100%;
  width: 50%;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.main.secondary};
  font-family: ${({ theme }) => theme.font.primary};
  text-align: center;
`
