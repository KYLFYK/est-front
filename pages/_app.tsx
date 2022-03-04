import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../src/app/theme/Theme";
import { StoreProvider } from "../src/mobx/StoreProvider";
import RootStore from "../src/mobx/stores/RootStore";
import Router from "next/router";
import { FC, useState } from "react";
import Typography from '../src/components/shared/Typography/Typography';
import s from '../src/components/containers/CardContainer/styles.module.scss';
import {Loader} from '../src/components/shared/Loader/Loader';

const Noop: FC = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <StoreProvider store={RootStore}>
      <MuiThemeProvider theme={theme}>
        <Layout pageProps={pageProps}>
          {loading ? <Loader/> : <Component {...pageProps} />}
        </Layout>
      </MuiThemeProvider>
    </StoreProvider>
  );
}

export default MyApp;
