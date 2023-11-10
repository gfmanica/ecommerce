import { TProduct } from '@/types';
import { money } from '@/utils/format';
import { Card, CardBody, Image } from '@nextui-org/react';
import Link from 'next/link';
type TCard = {
  produto: TProduct;
};

export default function ProdutoCard({ produto }: TCard) {
  return (
    <Card
      shadow="sm"
      className="w-full hover:shadow-xl "
      as={Link}
      href={`/produtos/${produto.idProduto}`}
    >
      <CardBody className="flex flex-col p-4">
        <Image
          alt="Album cover"
          height={200}
          src={produto.dsUrl}
          width="100%"
        />
        <p className="text-2xl">{produto.dsProduto}</p>
        <p className="text-primary-400 font-semibold">
          {money(produto.vlPreco)}
        </p>
      </CardBody>
    </Card>
  );
}
