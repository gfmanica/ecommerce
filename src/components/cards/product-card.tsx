import { TProduct } from '@/types';
import { money } from '@/utils/format';
import { Card, CardBody, Image } from '@nextui-org/react';
import Link from 'next/link';

type TProductCard = {
  product: TProduct;
};

export default function ProductCard({ product }: TProductCard) {
  return (
    <Card
      shadow="sm"
      className="w-full hover:shadow-xl "
      as={Link}
      href={`/produtos/${product.idProduct}`}
    >
      <CardBody className="flex flex-col justify-between gap-2 p-4">
        <div className="flex justify-center">
          <Image className="h-60" alt={product.dsProduct} src={product.dsUrl} />
        </div>

        <div>
          <p className="text-lg">{product.dsProduct}</p>
          <p className="text-primary-400 font-semibold">
            {money(product.vlPrice)}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
