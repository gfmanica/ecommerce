import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function Navbara() {
  return (
    <div className="bg-slate-200 flex items-center rounded-2xl mt-2 mb-4 mx-2 px-12 py-3 justify-between shadow-md">
      Ecommerce
      <div className="flex items-center gap-4">
        <Button as={Link} href="/" variant="shadow" color="primary" size="md">
          Inicial
        </Button>

        <Button
          as={Link}
          href="/categorias"
          variant="shadow"
          color="secondary"
          size="md"
        >
          Categorias
        </Button>
      </div>
    </div>
  );
}
