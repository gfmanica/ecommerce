'use client';

import useProductFinishList from '@/hooks/use-product-finish-list';
import { money } from '@/utils/format';
import { Card, CardBody, Divider, Image } from '@nextui-org/react';

export default function FinishInfoCard() {
  const { productFinishList } = useProductFinishList();

  const totalProductList = productFinishList.reduce(
    (acc, cur) => acc + cur.vlPrice * cur.qtProduct,
    0,
  );

  return (
    <Card className="w-full top-2 md:sticky flex-[3] p-2">
      <CardBody className='flex flex-col gap-1'>
        <p className="text-2xl font-semibold">Resumo da compra</p>

        <div className="flex justify-between ">
          <p className="text-lg">Total: </p>

          <p className="text-lg  font-semibold">{money(totalProductList)}</p>
        </div>

        <p className="text-lg">Produtos:</p>

        {productFinishList.map((product, index) => {
          return (
            <>
              {Boolean(index) && <Divider className="my-1" />}

              <div className="flex items-center gap-2">
                <Image alt="Album cover" width={30} src={product.dsUrl} />
                <p className="text-sm">{product.qtProduct}</p>

                <p className="text-sm w-30 mr-auto">{product.dsProduct}</p>

                <p className="text-sm">
                  Total:{' '}
                  <span>{money(product.qtProduct * product.vlPrice)}</span>
                </p>
              </div>
            </>
          );
        })}
      </CardBody>
    </Card>
  );
}
