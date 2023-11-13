import useProductCartList from '@/hooks/use-product-cart-list';
import { TProductCart } from '@/types';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { Dispatch, SetStateAction } from 'react';

type TConfirmExcludeModal = {
  product?: TProductCart;
  isOpen: boolean;
  onClose: () => void;
  selectedProducts?: number[];
  setSelectedProducts?: Dispatch<SetStateAction<number[]>>;
};

export default function ConfirmExcludeModal({
  selectedProducts,
  setSelectedProducts,
  product,
  isOpen,
  onClose,
}: TConfirmExcludeModal) {
  const { removeProductCart, removeProductsCartById } = useProductCartList();

  const onPressConfirm = () => {
    if (product) {
      removeProductCart(product);
    } else if (selectedProducts?.length && setSelectedProducts) {
      removeProductsCartById(selectedProducts);

      setSelectedProducts([]);
    }

    onClose();
  };

  return (
    <Modal backdrop="opaque" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Confirmação</ModalHeader>
            <ModalBody>
              {product ? (
                <p>
                  Tem deseja que deseja excluir o produto{' '}
                  <strong>{product.dsProduct}</strong> do carrinho?
                </p>
              ) : (
                Boolean(selectedProducts?.length) && (
                  <p>
                    Tem deseja que deseja excluir{' '}
                    <strong>{selectedProducts?.length} produto(s)</strong> do
                    carrinho?
                  </p>
                )
              )}
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
  );
}
