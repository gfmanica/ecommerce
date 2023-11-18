import { TProductTrack } from '@/types';
import { money } from '@/utils/format';
import { Card, CardBody, Image } from '@nextui-org/react';

type TProductTrackCard = {
  product: TProductTrack;
};

export default function ProductTrackCard({ product }: TProductTrackCard) {
  return (
    <Card shadow="sm" className="w-full">
      <CardBody className="flex md:flex-row md:items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 flex justify-center">
            <Image alt="Album cover" className="h-16" src={product.dsUrl} />
          </div>

          <p className="text-sm">{product.qtProduct}</p>

          <div className="w-full md:w-60">
            <p className="text-sm">{product.dsProduct}</p>
          </div>
        </div>

        <div className="flex flex-col mr-auto">
          <p className="text-sm ">
            Status: <span className="text-success-500">{product.dsStatus}</span>
          </p>
          <p className="text-sm ">Data do pedido: {product.dtOrder}</p>
        </div>

        <div className="flex justify-start">
          <p className="text-sm">
            Total: <strong>{money(product.qtProduct * product.vlPrice)}</strong>
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
