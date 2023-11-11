'use client';

import AddCartButton from '@/components/buttons/add-cart-button';
import PageContent from '@/components/page-content';
import { useNavbarContext } from '@/contexts/navbar-context';
import { TProduct } from '@/types';
import { money } from '@/utils/format';
import { Button, Card, Divider, Image, Input } from '@nextui-org/react';
import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function Produto() {
  const [qtProduct, setQtProduct] = useState<string>('0');
  const [product, setProduct] = useState<TProduct>({
    idProduct: 1,
    dsProduct: 'Refrigerante Fanta Uva 350Ml',
    dsBrand: 'Coca-Cola',
    dsUrl: '/fanta.jpg',
    vlPrice: 2,
    qtStock: 20,
  });

  const modifyQtProduct = (type: 'remove' | 'add') =>
    setQtProduct((oldQtProduct) => {
      let newQtProduct = Number(oldQtProduct);

      if (type === 'remove' && newQtProduct) {
        newQtProduct--;
      } else if (type === 'add' && newQtProduct < product.qtStock) {
        newQtProduct++;
      }

      return newQtProduct.toString();
    });

  return (
    <PageContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex justify-center">
        <Image
          alt="Produto"
          height={200}
          src={product.dsUrl}
          width="500"
          className="sticky top-1"
        />
      </div>

      <div className="flex flex-col py-8">
        <p className="text-2xl">{product.dsProduct}</p>

        <p>Marca {product.dsBrand}</p>

        <Divider className="my-2" />

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-4xl ">{money(product.vlPrice)}</p>

            <div>
              <p className="text-xs">Quantidade</p>

              <div className="flex gap-1 justify-end items-center">
                <Button
                  color="primary"
                  variant="ghost"
                  isIconOnly
                  onClick={() => modifyQtProduct('remove')}
                >
                  <AiOutlineMinus />
                </Button>

                <Input
                  className="w-14"
                  variant="faded"
                  size="sm"
                  value={qtProduct}
                  onValueChange={(value) => {
                    let newValue = value.replace(/\D/g, '').replace(/^0+/, '');

                    if (!value) {
                      newValue = '0';
                    }

                    if (Number(newValue) > product.qtStock) {
                      newValue = product.qtStock.toString();
                    }

                    setQtProduct(newValue);
                  }}
                />

                <Button
                  color="primary"
                  variant="ghost"
                  isIconOnly
                  onClick={() => modifyQtProduct('add')}
                >
                  <AiOutlinePlus />
                </Button>
              </div>
            </div>
          </div>

          <Button
            className=" text-white font-medium"
            color="success"
            variant="shadow"
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
