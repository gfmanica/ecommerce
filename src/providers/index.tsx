'use client';

import { NavbarProvider } from '@/contexts/navbar-context';
import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';

type TProviders = {
  children: ReactNode;
};

export default function Providers({ children }: TProviders) {
  return (
    <NextUIProvider>
      <NavbarProvider>{children}</NavbarProvider>
    </NextUIProvider>
  );
}
