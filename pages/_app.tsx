import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MuiThemeProvider } from '@material-ui/core'
import theme from '../src/app/theme/Theme'
import { StoreProvider } from '../src/mobx/StoreProvider'
import RootStore from '../src/mobx/stores/RootStore'
import Router from 'next/router'
import {useState} from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })

  return (
    <StoreProvider store={RootStore}>
      <MuiThemeProvider theme={theme}>
        {loading ? <h1>LOADING...</h1> : <Component {...pageProps}/>}
      </MuiThemeProvider>
    </StoreProvider>
  )
}

export default MyApp
