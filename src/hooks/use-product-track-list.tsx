import { useEffect, useState } from 'react';
import { TProduct, TProductCart, TProductTrack } from '@/types';
import { useLocalStorage } from 'usehooks-ts';
import useProductCartList from './use-product-cart-list';

export default function useProductTrackList() {
  const [productTrackList, setProductTrackList] = useLocalStorage<
    TProductTrack[]
  >('productTrackList', []);

  const setNewProductListTrack = (productList: TProductTrack[]) =>
    setProductTrackList((oldProductTrackList) => [
      ...oldProductTrackList,
      ...productList,
    ]);

  return {
    productTrackList,
    setNewProductListTrack,
  };
}
