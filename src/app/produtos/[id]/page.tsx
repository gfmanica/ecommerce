'use client';

import AddCartButton from '@/components/buttons/add-cart-button';
import PageContent from '@/components/page-content';
import ProductCounter from '@/components/product-counter';
import useProductCartList from '@/hooks/use-product-cart-list';
import useProductFinishList from '@/hooks/use-product-finish-list';
import { TProduct } from '@/types';
import { money } from '@/utils/format';
import { productList } from '@/utils/produtos';
import { Button, Card, Divider, Image, Input } from '@nextui-org/react';
import Link from 'next/link';
import { useRef, useState } from 'react';

type TProduto = {
  params: {
    id: string;
  };
};

export default function Produto({ params }: TProduto) {
  const { setNewProductFinish } = useProductFinishList();
  const [qtProduct, setQtProduct] = useState<string>('0');
  const { current: product } = useRef(productList[Number(params.id) - 1]);

  return (
    <PageContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex justify-center">
        <Image
          alt="Produto"
          height={200}
          src={product.dsUrl}
          width="500"
          className="sticky md:static top-1"
        />
      </div>

      <div className="flex flex-col py-8">
        <p className="text-2xl">{product.dsProduct}</p>

        <p>Marca {product.dsBrand}</p>

        <Divider className="my-2" />

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-4xl ">{money(product.vlPrice)}</p>

            <ProductCounter
              qtProduct={qtProduct}
              setQtProduct={setQtProduct}
              product={product}
            />
          </div>

          <Button
            className=" text-white font-medium"
            color="success"
            variant="shadow"
            as={Link}
            href="/finalizar"
            onClick={() => {
              setNewProductFinish({
                ...product,
                qtProduct: Number(qtProduct) || 1,
              });
            }}
          >
            Comprar agora
          </Button>

          <AddCartButton product={product} qtProduct={Number(qtProduct)} />

          <Card className="grid grid-cols-2 p-4 gap-2">
            <div>
              <p className="text-primary-400 font-semibold">
                Ecommerce garante
              </p>
              <p>a sua compra, do pedido à entrega.</p>
            </div>

            <div>
              <p className="text-primary-400 font-semibold">
                Devolução garantida
              </p>
              <p>em até 7 dias depois de receber o produto.</p>
            </div>
          </Card>
        </div>
      </div>
    </PageContent>
  );
}
