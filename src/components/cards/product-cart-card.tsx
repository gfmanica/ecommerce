import { TProductCart } from '@/types';
import { money } from '@/utils/format';
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Image,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import { AiOutlineDelete } from 'react-icons/ai';
import ProductCartCounter from '../product-cart-counter ';
import ConfirmExcludeModal from '../modals/confirm-exclude-modal';
import { Dispatch, SetStateAction } from 'react';

type TProductCartCard = {
  product: TProductCart;
  setSelectedProducts: Dispatch<SetStateAction<number[]>>;
};

export default function ProductCartCard({
  product,
  setSelectedProducts,
}: TProductCartCard) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ConfirmExcludeModal
        product={product}
        isOpen={isOpen}
        onClose={onClose}
      />

      <Card shadow="sm" className="w-full">
        <CardBody>
          <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <div className="flex w-full md:w-auto ">
                <Checkbox
                  className="mx-1"
                  onValueChange={(isSelected) =>
                    setSelectedProducts((oldSelectedProducts) => {
                      let newSelectedProducts = [...oldSelectedProducts];

                      if (isSelected) {
                        newSelectedProducts.push(product.idProduct);
                      } else {
                        newSelectedProducts = newSelectedProducts.filter(
                          (item) => item !== product.idProduct,
                        );
                      }

                      return newSelectedProducts;
                    })
                  }
                />

                <div className="flex flex-1 md:flex-none gap-4  flex-row-reverse md:flex-row items-center">
                  <Image alt={product.dsProduct} width={40} src={product.dsUrl} />

                  <div className="flex items-center w-36 break-words mr-auto">
                    <p className="text-base">{product.dsProduct}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p>
                  Valor unitário:{' '}
                  <span className="text-primary-400 font-semibold">
                    {money(product.vlPrice)}
                  </span>
                </p>

                <p>
                  Valor total:{' '}
                  <span className="text-success-400 font-semibold">
                    {money(product.vlPrice * product.qtProduct)}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center justify-between">
              <ProductCartCounter
                qtProduct={product.qtProduct.toString()}
                product={product}
              />

              <Tooltip content="Excluir" placement="bottom">
                <Button
                  color="danger"
                  isIconOnly
                  variant="shadow"
                  className="mt-4"
                  onClick={onOpen}
                >
                  <AiOutlineDelete size={20} />
                </Button>
              </Tooltip>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}
