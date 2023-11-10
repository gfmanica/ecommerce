'use client';

import useBreakpoint from '@/hooks/use-breakpoint';
import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';

export default function Navbar() {
  const { isDownMd } = useBreakpoint();

  return (
    <div className="bg-slate-200 flex items-center rounded-2xl mt-2 mb-8 mx-2 px-12 py-3 justify-between shadow-md">
      <Link href="/">
        <p className="font-semibold text-lg">Ecommerce</p>
      </Link>
      <div className="flex items-center gap-4">
        {!isDownMd && <Input size="sm" label="Pesquisar" className="w-80" />}

        <Button
          as={Link}
          href="/produtos"
          variant="shadow"
          color="secondary"
          size="md"
        >
          Produtos
        </Button>
      </div>
    </div>
  );
}
