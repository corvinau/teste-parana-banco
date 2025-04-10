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

interface PhoneValidationResponse {
  valid: boolean;
  reason?: string;
}

export default function Home() {
  const { setUserName, setUserFgtsBalace } = useWithdrawalBirthday();
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [fgtsBalace, setFgtsBalace] = useState<string>('');
  const [birthdayMonth, setBirthdayMonth] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validatePhone = async (
    phoneNumber: string
  ): Promise<PhoneValidationResponse> => {
    const apiUrl = `https://phonevalidation.abstractapi.com/v1/?api_key=9e60684755dd47ecbe1ec1814e4793d0&phone=55${phoneNumber}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        console.error('Erro ao validar telefone:', response.status);
        return { valid: false, reason: 'Erro ao comunicar com o servidor.' };
      }
      const data: PhoneValidationResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao validar telefone:', error);
      return { valid: false, reason: 'Erro inesperado ao validar.' };
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setPhoneError(null);
    setIsSubmitting(true);

    const validationResult = await validatePhone(phone);

    if (validationResult.valid) {
      setUserName(name);
      setUserFgtsBalace(parseFloat(fgtsBalace));
      setIsSubmitting(false);
      router.replace('/result');
    } else {
      setPhoneError(validationResult.reason || 'Número de telefone inválido.');
      setIsSubmitting(false);
    }
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
            placeholder='João da Silva'
          />
        </div>

        <div>
          <label htmlFor='phone'>Telefone (com DDD, apenas números)</label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            required
            placeholder='(xx)xxxxx-xxxx'
          />
          {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
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
            placeholder='1000,00'
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

        <button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Ver Proposta'}
        </button>
      </form>
    </div>
  );
}
