import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dark:bg-slate-800 bg-slate-50 dark:!text-slate-100 font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
