import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next</title>
      </Head>
      <GlobalStyle />
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
