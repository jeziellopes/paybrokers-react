import { AuthProvider } from './contexts'
import { ComposeProviders } from './providers'
import { ThemeProvider } from './providers/theme'
import AppRoutes from './routes'
import GlobalStyles from './styles/global'

function App() {
  return (
    <>
      <GlobalStyles />
      <ComposeProviders with={[ThemeProvider, AuthProvider]}>
        <AppRoutes />
      </ComposeProviders>
    </>
  )
}

export default App
