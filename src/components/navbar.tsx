'use client';

import { useNavbarContext } from '@/contexts/navbar-context';
import useBreakpoint from '@/hooks/use-breakpoint';
import { Button, Divider, Image, Input, Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Navbar() {
  const { isDownMd } = useBreakpoint();
  const { productCart } = useNavbarContext();

  return (
    <div className="bg-slate-200 flex items-center rounded-2xl mt-2 mb-8 mx-2 px-12 py-3 justify-between shadow-md">
      <Link href="/">
        <p className="font-semibold text-lg">Ecommerce</p>
      </Link>
      <div className="flex items-center gap-4">
        {!isDownMd && (
          <div className="flex gap-4">
            <Input size="sm" label="Pesquisar" className="w-80" />
            <Divider orientation="vertical" className="h-auto" />
          </div>
        )}

        <Button
          as={Link}
          href="/produtos"
          variant="shadow"
          color="secondary"
          size="md"
        >
          Produtos
        </Button>
        <Tooltip
          showArrow
          isOpen={Boolean(productCart)}
          content={
            <div className="flex gap-4 items-center p-1">
              <Image
                alt="Produto"
                width={50}
                src={productCart?.dsUrl}
                className="sticky top-1"
              />
              <div className="max-w-[150px]">
                <p>
                  <strong>{productCart?.dsProduct}</strong> adicionado ao
                  carrinho!
                </p>
              </div>
            </div>
          }
        >
          <Button
            as={Link}
            href="/carrinho"
            color="primary"
            variant="shadow"
            startContent={<AiOutlineShoppingCart size={20} />}
          >
            Carrinho
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
