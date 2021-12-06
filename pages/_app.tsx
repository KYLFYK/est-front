import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MuiThemeProvider } from '@material-ui/core'
import theme from '../src/app/theme/Theme'
import { StoreProvider } from '../src/mobx/StoreProvider'
import RootStore from '../src/mobx/stores/RootStore'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider store={RootStore}>
      <MuiThemeProvider theme={theme}>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </StoreProvider>

  )
}

export default MyApp
