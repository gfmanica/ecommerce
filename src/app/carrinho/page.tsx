'use client';
import PageContent from '@/components/page-content';
import ProductCartCard from '@/components/cards/product-cart-card';
import useProductCartList from '@/hooks/use-product-cart-list';
import { Button, Card, CardBody } from '@nextui-org/react';
import { money } from '@/utils/format';
import { useState } from 'react';

export default function Carrinho() {
  const { productCartList } = useProductCartList();
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const totalProductList = productCartList.reduce(
    (acc, cur) => acc + cur.vlPrice,
    0,
  );

  return (
    <PageContent className="flex items-start gap-4">
      {Boolean(productCartList.length) ? (
        <>
          <div className="flex flex-col gap-4 flex-[9]">
            {productCartList.map((item) => (
              <ProductCartCard key={item.idProduct} product={item} />
            ))}
          </div>

          <Card className="flex-[3] p-2 sticky top-2">
            <CardBody className="flex flex-col gap-2">
              <p className="text-2xl ">
                Subtotal:{' '}
                <span className="font-semibold">{money(totalProductList)}</span>
              </p>
              <Button
                variant="shadow"
                color="success"
                className=" text-white font-medium"
              >
                Finalizar pedido
              </Button>
            </CardBody>
          </Card>
        </>
      ) : (
        <div className="flex w-full justify-center">
          <p>Nenhum produto no carrinho! :(</p>
        </div>
      )}
    </PageContent>
  );
}
