import useProductCartList from '@/hooks/use-product-cart-list';
import useProductFinishList from '@/hooks/use-product-finish-list';
import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';

type TConfirmExcludeModal = {
  isOpen: boolean;
  onClose: () => void;
};

export default function FinishModal({ isOpen, onClose }: TConfirmExcludeModal) {
  const { removeAllProductCartList } = useProductCartList();
  const { removeAllProductFinishList } = useProductFinishList();

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      hideCloseButton
      isDismissable={false}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Aviso</ModalHeader>
            <ModalBody>Compra realizada com sucesso!</ModalBody>
            <ModalFooter>
              <Button
                as={Link}
                href="/"
                color="success"
                className=" text-white font-medium"
                onPress={() => {
                  removeAllProductCartList();
                  removeAllProductFinishList();
                }}
              >
                Voltar à tela inicial
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
