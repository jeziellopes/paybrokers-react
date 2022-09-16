import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px 0;
`

export const InputText = styled.input`
  border: 1px;
  font-family: ${({ theme }) => theme.font.primary};
  height: 24px;
`

export const Error = styled.span`
  color: red;
  font-size: 12px;
`
