import { TProduct, TProductCart } from '@/types';
import { useEffect, useState } from 'react';

export default function useProductCartList() {
  const [productCartList, setProductCartList] = useState<TProductCart[]>([]);

  const getProductCartList = (): TProductCart[] => {
    const storedValue = localStorage.getItem('productCartList');

    return storedValue ? JSON.parse(storedValue) : [];
  };

  const setNewProductCart = (product: TProductCart) => {
    let productCartList = getProductCartList();
    const productExistInList = productCartList.some(
      (item) => item.idProduct === product.idProduct,
    );

    if (productExistInList) {
      productCartList = productCartList.filter(
        (item) => item.idProduct !== product.idProduct,
      );
    }

    productCartList.push(product);

    localStorage.setItem('productCartList', JSON.stringify(productCartList));

    setProductCartList(productCartList);
  };

  const removeProductCart = (product: TProduct) => {
    const productCartList = getProductCartList();
    const newProductCartList = productCartList.filter(
      (item) => item.idProduct !== product.idProduct,
    );

    localStorage.setItem('productCartList', JSON.stringify(newProductCartList));

    setProductCartList(newProductCartList);
  };

  useEffect(() => setProductCartList(getProductCartList), []);


  return { productCartList, setNewProductCart, removeProductCart };
}
