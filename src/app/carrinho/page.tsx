'use client';
import PageContent from '@/components/page-content';
import ProdutoCard from '@/components/produto-card';
import useProductCartList from '@/hooks/use-product-cart-list';

export default function Carrinho() {
  const { productCartList } = useProductCartList();

  return (
    <PageContent>
      <div className="flex-[9] grid xl:grid-cols-3 grid-cols-2 gap-4 lg:gap-8 ">
        {productCartList.map((item) => (
          <div className="flex justify-center">
            <ProdutoCard key={item.idProduct} produto={item} />
          </div>
        ))}
      </div>
    </PageContent>
  );
}
