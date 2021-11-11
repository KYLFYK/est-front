import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MuiThemeProvider } from '@material-ui/core'
import theme from '../src/app/MUITheme/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <Component {...pageProps} />
    </MuiThemeProvider>

  )
}

export default MyApp
