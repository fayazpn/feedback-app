import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <style>
          @import
          url(`https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap`);
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
