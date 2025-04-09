import Head from 'next/head';
import { AppProps } from 'next/app';

import WithdrawalBirthdayProvider from '@/context/withdrawalBirthdayContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WithdrawalBirthdayProvider>
      <Head>
        <title>Calculadora de FGTS</title>
        <meta
          name='description'
          content='Calcule o valor do seu saque-aniversário'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Component {...pageProps} />
    </WithdrawalBirthdayProvider>
  );
}

export default MyApp;
