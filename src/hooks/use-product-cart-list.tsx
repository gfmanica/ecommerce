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

  const removeProductsCartById = (idList: number[]) => {
    setProductCartList((prevProductCartList) =>
      prevProductCartList.filter((item) => !idList.includes(item.idProduct)),
    );
  };

  const changeQtProductCart = ({
    product,
    qtProduct,
  }: {
    product: TProduct;
    qtProduct: number;
  }) => {
    setProductCartList((oldProductCartList) =>
      oldProductCartList.map((item) => {
        if (item.idProduct === product.idProduct) {
          item.qtProduct = qtProduct;
        }

        return item;
      }),
    );
  };

  const removeAllProductCartList = () => setProductCartList([]);

  return {
    productCartList,
    setNewProductCart,
    removeProductCart,
    changeQtProductCart,
    removeProductsCartById,
    removeAllProductCartList,
  };
}
