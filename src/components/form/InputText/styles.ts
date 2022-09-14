import styled from 'styled-components'

export const Container = styled.div``

export const InputText = styled.input`
  background-color: transparent;
  border: 1px ${({ theme }) => theme.colors.main.primary} solid;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.main.text};
  font-family: ${({ theme }) => theme.font.inputs};
  font-size: 16px;
  height: 40px;
  margin: 8px 8px 8px 0;
  text-indent: 8px;
  width: 100%;

  &:focus {
    border: 2px ${({ theme }) => theme.colors.main.primary} solid;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    opacity: 0.5; /* Firefox */
  }
`
