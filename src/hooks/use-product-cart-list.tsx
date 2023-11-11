import { useEffect, useState } from 'react';
import { TProduct, TProductCart } from '@/types';

export default function useProductCartList() {
  const getProductCartList = (): TProductCart[] => {
    const storedValue =
      typeof window !== 'undefined' && localStorage.getItem('productCartList');
    return storedValue ? JSON.parse(storedValue) : [];
  };

  const [productCartList, setProductCartList] = useState<TProductCart[]>(
    getProductCartList(),
  );

  const setNewProductCart = (product: TProductCart) => {
    setProductCartList((prevProductCartList) => {
      const newProductCartList = [...prevProductCartList];
      const productExistInList = newProductCartList.some(
        (item) => item.idProduct === product.idProduct,
      );

      if (productExistInList) {
        return newProductCartList.filter(
          (item) => item.idProduct !== product.idProduct,
        );
      }

      newProductCartList.push(product);
      localStorage.setItem(
        'productCartList',
        JSON.stringify(newProductCartList),
      );
      return newProductCartList;
    });
  };

  const removeProductCart = (product: TProduct) => {
    setProductCartList((prevProductCartList) => {
      const newProductCartList = prevProductCartList.filter(
        (item) => item.idProduct !== product.idProduct,
      );

      localStorage.setItem(
        'productCartList',
        JSON.stringify(newProductCartList),
      );
      return newProductCartList;
    });
  };

  return {
    productCartList,
    setNewProductCart,
    removeProductCart,
    getProductCartList,
  };
}
