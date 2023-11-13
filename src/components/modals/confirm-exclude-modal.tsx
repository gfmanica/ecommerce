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

type TConfirmExcludeModal = {
  product: TProductCart;
  isOpen: boolean;
  onClose: () => void;
};

export default function ConfirmExcludeModal({
  product,
  isOpen,
  onClose,
}: TConfirmExcludeModal) {
  const { removeProductCart } = useProductCartList();

  const onPressConfirm = () => {
    removeProductCart(product);

    onClose();
  };

  return (
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
  );
}
