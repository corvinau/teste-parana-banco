import Component from '../components/component';

export default function HomePage() {
  return (
    <div>
      <h1>Bem-vindo à Página Inicial!</h1>
      <Component />
      <p>Esta é a página inicial.</p>
      <a href='/result'>Resultado</a>
    </div>
  );
}
