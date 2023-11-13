import useProductCartList from '@/hooks/use-product-cart-list';
import { TProduct, TProductCart } from '@/types';
import { Button, Input } from '@nextui-org/react';
import { Dispatch, SetStateAction } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type TProductCounter = {
  product: TProduct | TProductCart;
  qtProduct: string;
};

export default function ProductCartCounter({
  product,
  qtProduct,
}: TProductCounter) {
  const { changeQtProductCart } = useProductCartList();

  const modifyQtProduct = (type: 'remove' | 'add') => {
    let newQtProduct = Number(qtProduct);

    if (type === 'remove' && newQtProduct) {
      newQtProduct--;
    } else if (type === 'add' && newQtProduct < product.qtStock) {
      newQtProduct++;
    }

    debugger;
    changeQtProductCart({ product, qtProduct: newQtProduct });
  };

  return (
    <div>
      <p className="text-xs">Quantidade</p>
      <div className="flex gap-1 items-center">
        <Button
          color="primary"
          variant="ghost"
          isIconOnly
          onClick={() => modifyQtProduct('remove')}
        >
          <AiOutlineMinus />
        </Button>

        <Input
          className="w-14"
          variant="faded"
          size="sm"
          value={qtProduct}
          onValueChange={(value) => {
            let newValue = value.replace(/\D/g, '').replace(/^0+/, '');

            if (!value) {
              newValue = '0';
            }

            if (Number(newValue) > product.qtStock) {
              newValue = product.qtStock.toString();
            }

            changeQtProductCart({ product, qtProduct: Number(newValue) });
          }}
        />

        <Button
          color="primary"
          variant="ghost"
          isIconOnly
          onClick={() => modifyQtProduct('add')}
        >
          <AiOutlinePlus />
        </Button>
      </div>
    </div>
  );
}
