import { DefaultTheme } from 'styled-components'

export type BaseProps = {
  color?: string
  weight?: string
  height?: number
  width?: number
}

export type ThemeProps = {
  theme: DefaultTheme
}

export type Props = BaseProps & ThemeProps
