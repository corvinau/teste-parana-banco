import Link from 'next/link';

import { useWithdrawalBirthday } from '@/context/withdrawalBirthdayContext';

export default function Result() {
  const { userName, userWithdrawalBirthday } = useWithdrawalBirthday();

  return (
    <main>
      <h1>Resultado da sua pesquisa</h1>
      <p>
        Nome: <strong>{userName}</strong>
      </p>
      <p>
        Valor do saque-aniversário:{' '}
        <strong>{userWithdrawalBirthday?.toFixed(2)}</strong>
      </p>

      <Link href='/'>Voltar para a Home</Link>
    </main>
  );
}
