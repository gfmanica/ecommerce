import { cn } from '@/utils/cn';
import { Button, Input, Tooltip } from '@nextui-org/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { HTMLProps, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

type TSearchField = {
  className?: HTMLProps<HTMLElement>['className'];
};

export default function SearchField({ className }: TSearchField) {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState<string>('');

  const insertSearchParam = () => {
    const params = new URLSearchParams(searchParams);

    params.set('search', value);

    push(`/produtos?${params.toString()}`);
  };

  return (
    <Input
      size="sm"
      label="Pesquisar"
      className={cn('w-80', className)}
      value={value}
      onValueChange={setValue}
      endContent={
        <div className="flex items-center">
          <Tooltip content="Pesquisar">
            <Button
              isIconOnly
              variant="light"
              className="h-8 w-8"
              onClick={insertSearchParam}
            >
              <AiOutlineSearch size={20} />
            </Button>
          </Tooltip>
        </div>
      }
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          insertSearchParam();
        }
      }}
    />
  );
}
