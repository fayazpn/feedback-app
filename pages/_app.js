import { AuthProvider } from '@/lib/auth'
import { Global, css } from '@emotion/react'
import { themeConfig } from '@/styles/styles'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, CSSReset } from '@chakra-ui/react'

import Head from 'next/head';
const theme = extendTheme(themeConfig)

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <AuthProvider>
      <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}
