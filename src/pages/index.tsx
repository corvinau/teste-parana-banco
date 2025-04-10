import { useRouter } from 'next/router';

import { useState } from 'react';

import { useWithdrawalBirthday } from '@/context/withdrawalBirthdayContext';

const months = [
  '',
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export default function Home() {
  const { setUserName, setUserFgtsBalace } = useWithdrawalBirthday();
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [fgtsBalace, setFgtsBalace] = useState<string>('');
  const [birthdayMonth, setBirthdayMonth] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setUserName(name);
    setUserFgtsBalace(parseFloat(fgtsBalace));

    router.replace('/result');
  };

  return (
    <div>
      <h1>
        Preencha os campos abaixo com seus dados para ver a proposta do seu
        saque-aniversário
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nome completo</label>
          <input
            type='text'
            id='name'
            name='name'
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
        </div>

        <div>
          <label htmlFor='phone'>Telefone</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            required
          />
        </div>

        <div>
          <label htmlFor='fgtsBalace'>Saldo do FGTS (R$)</label>
          <input
            type='number'
            step='any'
            id='fgtsBalace'
            name='fgtsBalace'
            value={fgtsBalace}
            onChange={(event) => {
              setFgtsBalace(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor='birthdayMonth'>Mês de Aniversário</label>
          <select
            id='birthdayMonth'
            name='birthdayMonth'
            value={birthdayMonth}
            onChange={(event) => {
              setBirthdayMonth(event.target.value);
            }}
            required>
            <option value=''>Selecione o mês</option>
            {months.slice(1).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <button type='submit'>Ver Proposta</button>
      </form>
    </div>
  );
}
