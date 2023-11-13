import { TProductCart } from '@/types';
import { money } from '@/utils/format';
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import ProductCounter from '../product-counter';
import { AiOutlineDelete } from 'react-icons/ai';
import useProductCartList from '@/hooks/use-product-cart-list';
import ProductCartCounter from '../product-cart-counter ';

type TProductCartCard = {
  product: TProductCart;
};

export default function ProductCartCard({ product }: TProductCartCard) {
  const { removeProductCart } = useProductCartList();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onPressConfirm = () => {
    removeProductCart(product);

    onClose();
  };

  return (
    <>
      <Modal backdrop="opaque" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Confirmação</ModalHeader>
              <ModalBody>
                <p>
                  Tem deseja que deseja excluir o produto{' '}
                  <strong>{product.dsProduct}</strong> do carrinho?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button>
                <Button color="primary" onPress={onPressConfirm}>
                  Excluir
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Card shadow="sm" className="w-full">
        <CardBody>
          <div className="flex justify-between">
            <div className="flex ">
              <Checkbox  className="mx-1"></Checkbox>
              <Image alt="Album cover" width={50} src={product.dsUrl} />

              <div className="ml-4">
                <p className="text-lg">{product.dsProduct}</p>

                <p className="text-primary-400 font-semibold">
                  {money(product.vlPrice)}
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
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
