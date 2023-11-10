'use client';
import { Card, CardBody, Slider } from '@nextui-org/react';
import { productList } from '@/utils/produtos';
import ProdutoCard from '@/components/produto-card';

export default function Produtos() {
  return (
    <div className="flex w-full px-2 mb-8 gap-4 items-start ">
      <Card className="flex-[3] p-2 sticky top-2">
        <CardBody className="flex flex-col gap-2">
          <p className="text-2xl font-semibold">Filtros</p>

          <Slider
            label="Preço"
            minValue={0}
            maxValue={500}
            defaultValue={[20, 100]}
            formatOptions={{ style: 'currency', currency: 'BRL' }}
            renderLabel={({ children, ...props }) => (
              <label {...props} className="text-base">
                {children}
              </label>
            )}
          />

          <div className="flex items-center">
            <p>Categorias {'>'}</p>
          </div>

          <div className="flex items-center">
            <p>Marcas {'>'}</p>
          </div>

          <div className="flex items-center">
            <p>País {'>'}</p>
          </div>

          <div className="flex items-center">
            <p>Estado Brasileiro {'>'}</p>
          </div>
        </CardBody>
      </Card>

      <div className="flex-[9] grid xl:grid-cols-3 grid-cols-2 gap-8 ">
        {productList.map((item) => (
          <div className="flex justify-center">
            <ProdutoCard key={item.idProduto} produto={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
