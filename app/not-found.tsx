import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-6">Página Não Encontrada</h2>
      <p className="text-muted-foreground mb-8">
        A página que você está tentando acessar não existe ou foi movida.
      </p>
      <Link href="/">
        <Button variant="secondary">Voltar para a página inicial</Button>
      </Link>
    </div>
  );
}
