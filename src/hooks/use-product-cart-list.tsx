import { useEffect, useState } from 'react';
import { TProduct, TProductCart } from '@/types';
import { useLocalStorage } from 'usehooks-ts';

export default function useProductCartList() {
  const [productCartList, setProductCartList] = useLocalStorage<TProductCart[]>(
    'productCartList',
    [],
  );

  const setNewProductCart = (product: TProductCart) => {
    setProductCartList((prevProductCartList) => {
      let newProductCartList = [...prevProductCartList];

      const productExistInList = newProductCartList.some(
        (item) => item.idProduct === product.idProduct,
      );

      debugger;
      if (productExistInList) {
        newProductCartList = newProductCartList.filter(
          (item) => item.idProduct !== product.idProduct,
        );
      }

      newProductCartList.push(product);

      return newProductCartList;
    });
  };

  const removeProductCart = (product: TProduct) => {
    setProductCartList((prevProductCartList) =>
      prevProductCartList.filter(
        (item) => item.idProduct !== product.idProduct,
      ),
    );
  };

  return {
    productCartList,
    setNewProductCart,
    removeProductCart,
  };
}
