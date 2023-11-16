import { useEffect, useState } from 'react';
import { TProduct, TProductCart } from '@/types';
import { useLocalStorage } from 'usehooks-ts';
import useProductCartList from './use-product-cart-list';

export default function useProductFinishList() {
  const { productCartList } = useProductCartList();

  const [productFinishList, setProductFinishList] = useLocalStorage<
    TProductCart[]
  >('productFinishList', []);

  const setNewProductFinishListByIdList = (idList: number[]) => {
    const newProductFinishList: TProductCart[] = [];

    idList.forEach((item) => {
      const product = productCartList.find(
        (product) => product.idProduct === item,
      );

      if (product) {
        newProductFinishList.push(product);
      }
    });

    setProductFinishList(newProductFinishList);
  };

  const setNewProductFinish = (product: TProductCart) =>
    setProductFinishList([product]);

  const removeAllProductFinishList = () => setProductFinishList([]);

  return {
    productFinishList,
    setNewProductFinishListByIdList,
    setNewProductFinish,
    removeAllProductFinishList,
  };
}
