'use client';

import { useNavbarContext } from '@/contexts/navbar-context';
import useBreakpoint from '@/hooks/use-breakpoint';
import {
  Button,
  Divider,
  Image,
  Input,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from '@nextui-org/react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import SearchField from './fields/search-field';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineInbox } from 'react-icons/ai';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { useState } from 'react';

export default function Navbar() {
  const { isDownMd } = useBreakpoint();
  const { productCart } = useNavbarContext();
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>();

  return (
    <div className="bg-gradient-to-r from-sky-100 to-indigo-100 gap-2 flex flex-col items-center rounded-2xl mt-2 mb-4 md:mb-8 mx-2 md:px-12 p-3  shadow-md">
      <div className="w-full flex items-center justify-between">
        <Link href="/">
          <p className="font-semibold text-lg hover:scale-125 transition duration-500">Ecommerce</p>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          {!isDownMd && (
            <>
              <div className="flex gap-4">
                <SearchField />

                <Divider orientation="vertical" className="h-auto" />
              </div>

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
            </>
          )}

          <Popover
            placement="bottom-end"
            isOpen={isOpenMenu}
            onOpenChange={(open) => setIsOpenMenu(open)}
          >
            <PopoverTrigger>
              <Button isIconOnly variant="light">
                <AiOutlineMenu size={20} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="px-1">
              {isDownMd ? (
                <Listbox variant="faded" aria-label="Listbox menu with icons">
                  <ListboxItem
                    key="produto"
                    as={Link}
                    href="/produtos"
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    startContent={<AiOutlineInbox size={15} />}
                  >
                    Produtos
                  </ListboxItem>
                  <ListboxItem
                    as={Link}
                    href="/carrinho"
                    key="carrinho"
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    startContent={<AiOutlineShoppingCart size={15} />}
                  >
                    Carrinho
                  </ListboxItem>
                  <ListboxItem
                    key="pedido"
                    as={Link}
                    href="/pedidos"
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    startContent={<AiOutlineInbox size={15} />}
                  >
                    Meus pedidos
                  </ListboxItem>
                  <ListboxItem
                    as={Link}
                    href="/faq"
                    key="faq"
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    startContent={<AiOutlineQuestionCircle size={15} />}
                  >
                    FAQ
                  </ListboxItem>
                </Listbox>
              ) : (
                <Listbox variant="faded" aria-label="Listbox menu with icons">
                  <ListboxItem
                    key="new"
                    as={Link}
                    href="/pedidos"
                    startContent={<AiOutlineInbox size={15} />}
                  >
                    Meus pedidos
                  </ListboxItem>
                  <ListboxItem
                    as={Link}
                    href="/faq"
                    key="new"
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                    startContent={<AiOutlineQuestionCircle size={15} />}
                  >
                    FAQ
                  </ListboxItem>
                </Listbox>
              )}
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {isDownMd && <SearchField className="w-full" />}
    </div>
  );
}
