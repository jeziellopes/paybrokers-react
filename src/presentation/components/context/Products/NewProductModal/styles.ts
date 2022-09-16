import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 24px 0 0;
`

export const ActionWrapper = styled.div`
  width: 300px;
`

export const Label = styled.span`
  color: ${({ theme }) => theme.colors.main.text};
  font-family: ${({ theme }) => theme.font.inputs};
  font-size: 16px;
  margin-top: 16px;
`

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

export const TextArea = styled.textarea`
  background-color: transparent;
  border: 1px ${({ theme }) => theme.colors.main.primary} solid;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.main.text};
  font-family: ${({ theme }) => theme.font.inputs};
  font-size: 16px;
  margin: 6px 8px 8px 0;
  padding: 8px;
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

export const Error = styled.span`
  color: red;
  font-size: 12px;
`
