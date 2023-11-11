import { useNavbarContext } from '@/contexts/navbar-context';
import useProductCartList from '@/hooks/use-product-cart-list';
import { TProduct } from '@/types';
import { Button } from '@nextui-org/react';

type TAddCartButton = {
  product: TProduct;
  qtProduct: number;
};

export default function AddCartButton({ product, qtProduct }: TAddCartButton) {
  const { setNewProductCart } = useProductCartList();
  const { setProductCart } = useNavbarContext();

  return (
    <Button
      className="text-white font-medium	"
      color="primary"
      variant="shadow"
      onClick={() => {
        setNewProductCart({ ...product, qtProduct: qtProduct || 1 });
        setProductCart(product);
      }}
    >
      Adicionar ao carrinho
    </Button>
  );
}
