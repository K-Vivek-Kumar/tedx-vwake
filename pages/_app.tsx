import { AppProps } from "next/app";
import "../styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TEDxIITHyderabad</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
