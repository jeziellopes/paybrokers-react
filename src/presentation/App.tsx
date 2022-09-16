import {
  AuthProvider,
  ModalProvider,
  ProductsProvider,
  SellsProvider,
} from './contexts'
import { ComposeProviders } from './providers'
import { ThemeProvider } from './providers/theme'
import AppRoutes from './routes'
import GlobalStyles from './styles/global'

function App() {
  return (
    <>
      <GlobalStyles />
      <ComposeProviders
        with={[
          ModalProvider,
          SellsProvider,
          ProductsProvider,
          AuthProvider,
          ThemeProvider,
        ]}
      >
        <AppRoutes />
      </ComposeProviders>
    </>
  )
}

export default App
