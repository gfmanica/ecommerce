import { TProduct, TProductCart } from '@/types';
import { useEffect, useState } from 'react';

export default function useProductCartList() {
  const [productCartList, setProductCartList] = useState<TProductCart[]>([]);

  const getProductCartList = (): TProductCart[] => {
    const storedValue = localStorage.getItem('productCartList');

    return storedValue ? JSON.parse(storedValue) : [];
  };

  const setNewProductCart = (product: TProductCart) => {
    const productCartList = getProductCartList();

    productCartList.push(product);

    localStorage.setItem('productCartList', JSON.stringify(productCartList));

    setProductCartList(productCartList);
  };

  useEffect(() => setProductCartList(getProductCartList), []);

  return { productCartList, setNewProductCart };
}
