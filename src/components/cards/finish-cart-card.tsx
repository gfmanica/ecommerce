import useProductCartList from '@/hooks/use-product-cart-list';
import { money } from '@/utils/format';
import { Button, Card, CardBody } from '@nextui-org/react';

type TFinishCartCard = {
  selectedProducts: number[];
};

export default function FinishCartCard({ selectedProducts }: TFinishCartCard) {
  const { productCartList } = useProductCartList();

  const totalProductList = productCartList.reduce(
    (acc, cur) => acc + cur.vlPrice * cur.qtProduct,
    0,
  );

  return (
    <Card className="w-full flex-[3] p-2 sticky top-2 ">
      <CardBody className="flex flex-col gap-2">
        <p className="text-2xl ">
          Subtotal:{' '}
          <span className="font-semibold">{money(totalProductList)}</span>
        </p>

        <Button
          variant="shadow"
          color="success"
          className=" text-white font-medium"
        >
          Finalizar pedido
        </Button>

        {Boolean(selectedProducts.length) && (
          <>
            <Button
              variant="shadow"
              color="primary"
              className=" text-white font-medium "
            >
              Finalizar selecionado(s)
            </Button>

            <Button
              variant="shadow"
              color="danger"
              className=" text-white font-medium"
            >
              Excluir selecionado(s)
            </Button>
          </>
        )}
      </CardBody>
    </Card>
  );
}
