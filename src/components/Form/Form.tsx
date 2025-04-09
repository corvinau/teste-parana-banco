import React, { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  fgtsBalace: string;
  birthdayMonth: string;
}

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

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    fgtsBalace: '',
    birthdayMonth: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { name, phone, fgtsBalace, birthdayMonth } = formData;

    console.log(name);
    console.log(phone);
    console.log(fgtsBalace);
    console.log(birthdayMonth);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Nome completo:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor='phone'>Telefone:</label>
        <input
          type='tel'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor='fgtsBalace'>Saldo do FGTS (R$):</label>
        <input
          type='text'
          id='fgtsBalace'
          name='fgtsBalace'
          value={formData.fgtsBalace}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor='birthdayMonth'>Mês de Aniversário:</label>
        <select
          id='birthdayMonth'
          name='birthdayMonth'
          value={formData.birthdayMonth}
          onChange={handleChange}
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
  );
};

export default Form;
