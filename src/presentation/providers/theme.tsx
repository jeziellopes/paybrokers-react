import React from 'react'
import { ThemeProvider as BaseThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
}
