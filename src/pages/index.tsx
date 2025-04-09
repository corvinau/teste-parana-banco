import Link from 'next/link';

import SimpleForm from '@/components/Form/Form';

export default function HomePage() {
  return (
    <div>
      <h1>Preencha seus dados para ver a proposta</h1>
      <SimpleForm />
      <Link href='/result'>Resultado</Link>
    </div>
  );
}
