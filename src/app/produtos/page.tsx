'use client';
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  CheckboxGroup,
  Slider,
  SliderValue,
} from '@nextui-org/react';
import { productList } from '@/utils/produtos';
import ProductCard from '@/components/cards/product-card';
import PageContent from '@/components/page-content';
import useBreakpoint from '@/hooks/use-breakpoint';
import { useEffect, useState } from 'react';
import { TProduct } from '@/types';

const category = [
  { value: 'drink', label: 'Bebidas' },
  { value: 'food', label: 'Comidas' },
];

const country = [
  { value: 'brazil', label: 'Brasil' },
  { value: 'argentina', label: 'Argentina' },
  { value: 'japan', label: 'Japão' },
];

const brand = [
  { value: 'coca-cola', label: 'Coca Cola' },
  { value: 'havana', label: 'Havana' },
];

export default function Produtos({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) {
  const [price, setPrice] = useState<SliderValue>([0, 50]);
  const [categories, setCategories] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [filteredProductList, setFilteredProductList] = useState<TProduct[]>(
    [],
  );
  const { isDownMd } = useBreakpoint();

  useEffect(() => {
    let newFilteredProductList = productList;

    if (Array.isArray(price)) {
      newFilteredProductList = newFilteredProductList.filter(
        (item) => item.vlPrice > price[0] && item.vlPrice < price[1],
      );
    }

    if (Array.isArray(countries) && countries.length) {
      newFilteredProductList = newFilteredProductList.filter((item) =>
        countries.includes(item.country.idCountry),
      );
    }

    if (Array.isArray(brands) && brands.length) {
      newFilteredProductList = newFilteredProductList.filter((item) =>
        brands.includes(item.brand.idBrand),
      );
    }

    if (Array.isArray(categories) && categories.length) {
      newFilteredProductList = newFilteredProductList.filter((item) =>
        categories.includes(item.category),
      );
    }

    setFilteredProductList(newFilteredProductList);
  }, [price, countries, brands, categories]);

  return (
    <PageContent className="flex flex-col mds:flex-row items-start px-2 mb-8 gap-4 ">
      <Card className="flex-[3] p-2 w-full md:sticky top-2">
        <CardBody className="flex flex-col gap-2">
          <p className="text-2xl font-semibold">Filtros</p>

          <Slider
            label="Preço"
            minValue={0}
            maxValue={100}
            value={price}
            onChange={setPrice}
            formatOptions={{ style: 'currency', currency: 'BRL' }}
            renderLabel={({ children, ...props }) => (
              <label {...props} className="text-base">
                {children}
              </label>
            )}
          />

          <CheckboxGroup
            label="Categoria"
            value={categories}
            onValueChange={setCategories}
          >
            {category.map((item) => {
              return <Checkbox value={item.value}>{item.label}</Checkbox>;
            })}
          </CheckboxGroup>

          <CheckboxGroup label="Marca" value={brands} onValueChange={setBrands}>
            {brand.map((item) => {
              return <Checkbox value={item.value}>{item.label}</Checkbox>;
            })}
          </CheckboxGroup>

          <CheckboxGroup
            label="País"
            value={countries}
            onValueChange={setCountries}
          >
            {country.map((item) => {
              return <Checkbox value={item.value}>{item.label}</Checkbox>;
            })}
          </CheckboxGroup>
        </CardBody>
      </Card>

      <div className="flex-[9] grid xl:grid-cols-3 grid-cols-2 gap-4 lg:gap-8 ">
        {filteredProductList.map((item) => (
          <ProductCard key={item.idProduct} product={item} />
        ))}
      </div>
    </PageContent>
  );
}
