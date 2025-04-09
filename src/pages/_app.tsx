import Head from 'next/head';
import { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

import WithdrawalBirthdayProvider from '@/context/withdrawalBirthdayContext';

import '@/styles/globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Calculadora de FGTS</title>
        <meta
          name='description'
          content='Calcule o valor do seu saque-aniversário'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={`${montserrat.className} font-sans`}>
        <WithdrawalBirthdayProvider>
          <Component {...pageProps} />
        </WithdrawalBirthdayProvider>
      </main>
    </>
  );
}

export default MyApp;
