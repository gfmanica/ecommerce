import useProductCartList from '@/hooks/use-product-cart-list';
import useProductFinishList from '@/hooks/use-product-finish-list';
import useProductTrackList from '@/hooks/use-product-track-list';
import { TProductTrack } from '@/types';
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
  const { removeAllProductFinishList, productFinishList } =
    useProductFinishList();
  const { setNewProductListTrack } = useProductTrackList();

  const onPress = () => {
    setNewProductListTrack(
      productFinishList.map((item) => ({
        ...item,
        dsStatus: 'Em preparação',
        dtOrder: new Date().toLocaleDateString(),
      })),
    );
    removeAllProductCartList();
    removeAllProductFinishList();
  };

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
                color="primary"
                className=" text-white font-medium"
                onPress={onPress}
              >
                Voltar à tela inicial
              </Button>

              <Button
                as={Link}
                href="/pedidos"
                color="success"
                className=" text-white font-medium"
                onPress={onPress}
              >
                Acompanhar pedido
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
