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
        <title>Calculadora de saque-aniversário</title>
        <meta
          name='description'
          content='Calcule o valor do seu saque-aniversário de acordo com o saldo do seu FGTS'
        />
        <link rel='icon' href='/favicon.svg' />
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
