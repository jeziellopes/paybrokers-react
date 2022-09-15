import styled, { css } from 'styled-components'

import * as T from './../../../types'

export const Button = styled.button<T.ButtonProps>`
  ${({ theme }) => css`
    align-self: center;
    background-color: ${theme.colors.main.primary};
    border-radius: 4px;
    color: ${theme.colors.main.buttonText};
    cursor: pointer;
    font-family: ${theme.colors.main.text};
    font-size: 14px;
    height: 4vh;
    margin: 24px 0 0;
    min-height: 40px;
    padding: 0;
    width: 100%;

    @media only screen and (max-width: 700px) {
      height: 5vh;
    }
  `}
`
