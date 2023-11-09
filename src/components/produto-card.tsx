import { TProduto } from '@/types';
import { money } from '@/utils/format';
import { Card, CardBody, Image } from '@nextui-org/react';
type TCard = {
  produto: TProduto;
};

export default function ProdutoCard({ produto }: TCard) {
  return (
    <Card shadow="sm" className="w-[300px]">
      <CardBody className="flex flex-col">
        <Image
          alt="Album cover"
          height={200}
          src={produto.dsUrl}
          width="100%"
        />
        <p className="text-xl">{produto.dsProduto}</p>
        <p className="text-primary-400 font-semibold">
          {money(produto.vlPreco)}
        </p>
      </CardBody>
    </Card>
  );
}
