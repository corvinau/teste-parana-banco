import Link from 'next/link';

import { useWithdrawalBirthday } from '@/context/withdrawalBirthdayContext';

export default function Result() {
  const { userName, userWithdrawalBirthday } = useWithdrawalBirthday();

  return (
    <div className='result-container'>
      <h1>Esta é a sua proposta para o saque-aniversário</h1>

      <div>
        <p>
          Nome: <strong>{userName}</strong>
        </p>
        <p>
          Valor do saque-aniversário:{' '}
          <strong>R$ {userWithdrawalBirthday?.toFixed(2)}</strong>
        </p>
      </div>

      <Link href='/'>Voltar para a Home</Link>
    </div>
  );
}
