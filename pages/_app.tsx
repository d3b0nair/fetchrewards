import Head from 'next/head';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Take Home Test for Fetch Rewards</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:site_name"
          content="Take Home Test for Fetch Rewards"
        />
        <meta charSet="UTF-8" />
        <meta property="og:locale" content="en_US" />
        <meta name="description" content="Take Home Test for Fetch Rewards" />
        <meta
          property="og:description"
          content="Take Home Test for Fetch Rewards"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </>
  );
}
