'use client';

import ProductTrackCard from '@/components/cards/product-track-card';
import PageContent from '@/components/page-content';
import useProductTrackList from '@/hooks/use-product-track-list';

export default function Pedidos() {
  const { productTrackList } = useProductTrackList();

  return (
    <PageContent className="flex flex-col gap-4">
      <p className="text-3xl font-semibold ml-2">Meus pedidos</p>

      {productTrackList.map((item) => (
        <ProductTrackCard product={item} />
      ))}
    </PageContent>
  );
}
