import { TProduct, TProductCart } from '@/types';
import { Button, Input } from '@nextui-org/react';
import { Dispatch, SetStateAction } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type TProductCounter = {
  product: TProduct | TProductCart;
  qtProduct: string;
  setQtProduct: Dispatch<SetStateAction<string>>;
};

export default function ProductCounter({
  product,
  qtProduct,
  setQtProduct,
}: TProductCounter) {
  const modifyQtProduct = (type: 'remove' | 'add') =>
    setQtProduct((oldQtProduct) => {
      let newQtProduct = Number(oldQtProduct);

      if (type === 'remove' && newQtProduct) {
        newQtProduct--;
      } else if (type === 'add' && newQtProduct < product.qtStock) {
        newQtProduct++;
      }

      return newQtProduct.toString();
    });

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

            setQtProduct(newValue);
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
