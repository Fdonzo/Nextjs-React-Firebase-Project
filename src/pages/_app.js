/* eslint-disable @next/next/no-page-custom-font */
{
  /*import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
*/
}

import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../theme";
import createEmotionCache from "../createEmotionCache";
import Navigation from "../modules/navigation";
import Footer from "../modules/footer";
import { store } from "../stores/configuredStore";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import AuthenticationFooter from "../components/footer/authenticationPageFooter";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    // eslint-disable-next-line no-unused-vars
    pageProps: { session, ...pageProps },
  } = props;
  const { pathname } = useRouter();
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Navigation />
            <Component {...pageProps} />

            {pathname === "/authentication" ||
            pathname === "/decimation" ||
            pathname === "/authentication/passwordrecreation" ? (
              <AuthenticationFooter />
            ) : (
              <Footer />
            )}
          </ThemeProvider>
        </SessionProvider>
      </Provider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
