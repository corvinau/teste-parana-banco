import Link from 'next/link';

export default function Result() {
  return (
    <div>
      <h1>Resultado</h1>
      <p>Esta é a página de resultado.</p>
      <Link href='/'>Voltar para a Home</Link>
    </div>
  );
}
