import { cn } from '@/utils/cn';
import { HTMLAttributes, HTMLProps, ReactNode } from 'react';

type TPageContent = {
  children: ReactNode;
  className?: HTMLProps<HTMLDivElement>['className'];
};

export default function PageContent({ children, className }: TPageContent) {
  return (
    <div className={cn('px-2 lg:px-20 xl:px-32 mb-4', className)}>
      {children}
    </div>
  );
}
