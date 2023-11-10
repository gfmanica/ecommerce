import PageContent from '@/components/page-content';
import ProdutoCard from '@/components/produto-card';
import { productList } from '@/utils/produtos';
import { Image } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <Image
        src="/banner.jpg"
        alt="banner"
        width="100%"
        height={400}
        className="max-h-[400px] rounded-none"
      />
      <PageContent >
        <h1 className="font-semibold text-xl lg:text-2xl mb-4">
          Produtos em destaque
        </h1>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4 lg:gap-8 ">
          {productList.map((item) => (
            <ProdutoCard key={item.idProduto} produto={item} />
          ))}
        </div>
      </PageContent>
    </>
  );
}
