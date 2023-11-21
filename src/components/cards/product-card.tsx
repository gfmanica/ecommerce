import { TProduct } from '@/types';
import { money } from '@/utils/format';
import { Card, CardBody, Image } from '@nextui-org/react';
import Link from 'next/link';

type TProductCard = {
  product: TProduct;
};

export default function ProductCard({ product }: TProductCard) {
  return (
    <div className="hover:shadow-xl hover:scale-105 transition duration-500 rounded-2xl ">
      <Card
        className="w-full h-full"
        as={Link}
        href={`/produtos/${product.idProduct}`}
      >
        <CardBody className="flex flex-col justify-between gap-2 p-4">
          <div className="flex justify-center">
            <Image
              className="h-36 md:h-60"
              alt={product.dsProduct}
              src={product.dsUrl}
            />
          </div>

          <div>
            <p className="text-lg">{product.dsProduct}</p>
            <p className="text-primary-400 font-semibold">
              {money(product.vlPrice)}
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
