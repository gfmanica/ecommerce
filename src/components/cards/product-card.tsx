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
      <CardBody className="flex flex-col p-4">
        <Image
          alt="Album cover"
          height={200}
          src={product.dsUrl}
          width="100%"
        />
        <p className="text-2xl">{product.dsProduct}</p>
        <p className="text-primary-400 font-semibold">
          {money(product.vlPrice)}
        </p>
      </CardBody>
    </Card>
  );
}
