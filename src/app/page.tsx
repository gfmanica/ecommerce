import ProdutoCard from '@/components/produto-card';
import Image from 'next/image';

export default function Home() {
  const productList = [
    {
      idProduto: 1,
      dsProduto: 'Teste',
      dsUrl: '/fanta.jpg',
      vlPreco: 2,
    },
    {
      idProduto: 1,
      dsProduto: 'Teste',
      dsUrl: '/fanta.jpg',
      vlPreco: 2,
    },
    {
      idProduto: 1,
      dsProduto: 'Teste',
      dsUrl: '/fanta.jpg',
      vlPreco: 2,
    },
    {
      idProduto: 1,
      dsProduto: 'Teste',
      dsUrl: '/fanta.jpg',
      vlPreco: 2,
    },
    {
      idProduto: 1,
      dsProduto: 'Teste',
      dsUrl: '/fanta.jpg',
      vlPreco: 2,
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="h-[400px] min-w-full bg-slate-200 rounded-2xl">
        Ofertas
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-8">
        {productList.map((item) => (
          <ProdutoCard key={item.idProduto} produto={item} />
        ))}
      </div>
    </div>
  );
}
