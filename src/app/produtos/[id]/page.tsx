import { money } from '@/utils/format';
import { Button, Card, Divider, Image } from '@nextui-org/react';

export default function Produto() {
  const produto = {
    idProduto: 1,
    dsProduto: 'Refrigerante Fanta Uva 350Ml',
    dsMarca: 'Coca-Cola',
    dsUrl: '/fanta.jpg',
    vlPreco: 2,
  };

  return (
    <div className="grid grid-cols-2 gap-4 max-w-[1400px] ">
      <div className="flex justify-center">
        <Image
          alt="Produto"
          height={200}
          src={produto.dsUrl}
          width="500"
          className="sticky top-1"
        />
      </div>

      <div className="flex flex-col py-8">
        <p className="text-2xl">{produto.dsProduto}</p>

        <p>Marca {produto.dsMarca}</p>

        <Divider className="my-2" />
        <div className="flex flex-col gap-4">
          <p className="text-3xl ">{money(produto.vlPreco)}</p>

          <Button
            className=" text-white font-medium	"
            color="success"
            variant="shadow"
          >
            Comprar agora
          </Button>

          <Button
            className="text-white font-medium	"
            color="primary"
            variant="shadow"
          >
            Adicionar ao carrinho
          </Button>

          <Card className="grid grid-cols-2 p-4 gap-2">
            <div>
              <p className="text-primary-400 font-semibold">
                Ecommerce garante
              </p>
              <p>a sua compra, do pedido à entrega.</p>
            </div>

            <div>
              <p className="text-primary-400 font-semibold">
                Devolução garantida
              </p>
              <p>em até 7 dias depois de receber o produto.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
