import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
       <script
          src="https://kit.fontawesome.com/fb25c2e811.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body style={{
        margin: 0,
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
