import useProductCartList from '@/hooks/use-product-cart-list';
import { money } from '@/utils/format';
import { Button, Card, CardBody, useDisclosure } from '@nextui-org/react';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import ConfirmExcludeModal from '../modals/confirm-exclude-modal';

type TFinishCartCard = {
  selectedProducts: number[];
  setSelectedProducts: Dispatch<SetStateAction<number[]>>;
};

export default function FinishCartCard({
  selectedProducts,
  setSelectedProducts,
}: TFinishCartCard) {
  const { productCartList, removeProductsCartById } = useProductCartList();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const totalProductList = productCartList.reduce(
    (acc, cur) => acc + cur.vlPrice * cur.qtProduct,
    0,
  );

  return (
    <>
      <ConfirmExcludeModal
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}
        onClose={onClose}
        isOpen={isOpen}
      />

      <Card className="w-full flex-[3] p-2 sticky top-2 z-50">
        <CardBody className="flex flex-col gap-2">
          <p className="text-2xl ">
            Subtotal:{' '}
            <span className="font-semibold">{money(totalProductList)}</span>
          </p>

          <Button
            variant="shadow"
            color="success"
            className=" text-white font-medium"
            as={Link}
            href="/finalizar"
          >
            Finalizar pedido
          </Button>

          {Boolean(selectedProducts.length) && (
            <>
              <Button
                variant="shadow"
                color="primary"
                className=" text-white font-medium "
                as={Link}
                href="/finalizar"
              >
                Finalizar selecionado(s)
              </Button>

              <Button
                variant="shadow"
                color="danger"
                className=" text-white font-medium"
                onClick={onOpen}
              >
                Excluir selecionado(s)
              </Button>
            </>
          )}
        </CardBody>
      </Card>
    </>
  );
}
