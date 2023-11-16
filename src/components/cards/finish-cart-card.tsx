import useProductCartList from '@/hooks/use-product-cart-list';
import { money } from '@/utils/format';
import {
  Button,
  Card,
  CardBody,
  Divider,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import ConfirmExcludeModal from '../modals/confirm-exclude-modal';
import { AiOutlineDelete } from 'react-icons/ai';
import useProductFinishList from '@/hooks/use-product-finish-list';

type TFinishCartCard = {
  selectedProducts: number[];
  setSelectedProducts: Dispatch<SetStateAction<number[]>>;
};

export default function FinishCartCard({
  selectedProducts,
  setSelectedProducts,
}: TFinishCartCard) {
  const { setNewProductFinishListByIdList } = useProductFinishList();
  const { productCartList } = useProductCartList();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const totalProductList = productCartList.reduce(
    (acc, cur) => acc + cur.vlPrice * cur.qtProduct,
    0,
  );

  const totalSelectedProductList = selectedProducts.reduce((acc, cur) => {
    const product = productCartList.find(
      (product) => product.idProduct === cur,
    );

    return acc + (product ? product.vlPrice * product.qtProduct : 0);
  }, 0);

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
            onClick={() =>
              setNewProductFinishListByIdList(
                productCartList.map((item) => item.idProduct),
              )
            }
          >
            Finalizar pedido
          </Button>

          {Boolean(selectedProducts.length) && (
            <>
              <Divider className="my-2" />

              <p className="text-xl ">Produtos selecionados</p>

              <p className="text-lg ">
                Subtotal:{' '}
                <span className="font-semibold">
                  {money(totalSelectedProductList)}
                </span>
              </p>

              <div className="flex gap-2">
                <Button
                  variant="shadow"
                  color="primary"
                  className=" text-white font-medium flex-1"
                  as={Link}
                  href="/finalizar"
                  onClick={() =>
                    setNewProductFinishListByIdList(selectedProducts)
                  }
                >
                  Finalizar produtos
                </Button>

                <Tooltip content="Excluir produtos" placement="bottom">
                  <Button
                    isIconOnly
                    variant="shadow"
                    color="danger"
                    className=" text-white font-medium"
                    onClick={onOpen}
                  >
                    <AiOutlineDelete size={20} />
                  </Button>
                </Tooltip>
              </div>
            </>
          )}
        </CardBody>
      </Card>
    </>
  );
}
