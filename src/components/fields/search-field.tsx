import { cn } from '@/utils/cn';
import { Input } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { HTMLProps } from 'react';

type TSearchField = {
  className?: HTMLProps<HTMLElement>['className'];
};

export default function SearchField({ className }: TSearchField) {
  const { push } = useRouter();
  const searchParams = useSearchParams();

  return (
    <Input
      size="sm"
      label="Pesquisar"
      className={cn('w-80', className)}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          const params = new URLSearchParams(searchParams);

          params.set('search', (event.target as HTMLInputElement).value);

          debugger;
          push(`/produtos?${params.toString()}`);
        }
      }}
    />
  );
}
