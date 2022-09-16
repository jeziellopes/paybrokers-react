import { DefaultTheme } from 'styled-components'

export type BaseProps = {
  color?: string
  weight?: string
  height?: number
  width?: number
}

export type ButtonProps = {
  label?: string
  children?: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export type ThemeProps = {
  theme?: DefaultTheme
}

export type Props = BaseProps & ButtonProps & ThemeProps
