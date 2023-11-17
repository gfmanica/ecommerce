'use client';

import { useNavbarContext } from '@/contexts/navbar-context';
import useBreakpoint from '@/hooks/use-breakpoint';
import { Button, Divider, Image, Input, Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import SearchField from './fields/search-field';

export default function Navbar() {
  const { isDownMd } = useBreakpoint();
  const { productCart } = useNavbarContext();

  return (
    <div className="bg-gradient-to-r from-sky-100 to-indigo-100 gap-2 flex flex-col items-center rounded-2xl mt-2 md:mb-8 mx-2 md:px-12 p-3  shadow-md">
      <div className="w-full flex items-center justify-between">
        <Link href="/">
          <p className="font-semibold text-lg">Ecommerce</p>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          {!isDownMd && (
            <div className="flex gap-4">
              <SearchField />

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
                  src={productCart?.dsUrl}
                  className="sticky top-1 w-8"
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

      {isDownMd && <SearchField className="w-full" />}
    </div>
  );
}
