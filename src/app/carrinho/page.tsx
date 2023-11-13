'use client';
import PageContent from '@/components/page-content';
import ProductCartCard from '@/components/cards/product-cart-card';
import useProductCartList from '@/hooks/use-product-cart-list';
import { useState } from 'react';
import FinishCartCard from '@/components/cards/finish-cart-card';

export default function Carrinho() {
  const { productCartList } = useProductCartList();
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);


  return (
    <PageContent className="flex flex-col-reverse md:flex-row items-start  gap-4">
      {Boolean(productCartList.length) ? (
        <>
          <div className="flex w-full  flex-col gap-4 flex-[9]">
            {productCartList.map((item) => (
              <ProductCartCard
                key={item.idProduct}
                product={item}
                setSelectedProducts={setSelectedProducts}
              />
            ))}
          </div>

          <FinishCartCard
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        </>
      ) : (
        <div className="flex w-full justify-center">
          <p>Nenhum produto no carrinho! :(</p>
        </div>
      )}
    </PageContent>
  );
}
