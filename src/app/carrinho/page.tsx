'use client';
import PageContent from '@/components/page-content';
import ProductCartCard from '@/components/cards/product-cart-card';
import useProductCartList from '@/hooks/use-product-cart-list';

export default function Carrinho() {
  const { productCartList } = useProductCartList();

  return (
    <PageContent>
      <div className="flex flex-col gap-4 ">
        {productCartList.map((item) => (
          <div className="flex justify-center">
            <ProductCartCard key={item.idProduct} product={item} />
          </div>
        ))}
      </div>
    </PageContent>
  );
}
