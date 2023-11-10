import { TProduct } from '@/types';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';

type TNavbarContext = {
  productCart: TProduct | null;
  setProductCart: Dispatch<SetStateAction<TProduct | null>>;
};

type TNavbarProvider = {
  children?: ReactNode;
};

const NavbarContext = createContext<TNavbarContext>({} as TNavbarContext);

export function NavbarProvider({ children }: TNavbarProvider) {
  const [productCart, setProductCart] = useState<TProduct | null>(null);

  useLayoutEffect(() => {
    if (productCart) {
      setTimeout(() => setProductCart(null), 3000);
    }
  }, [productCart]);

  const contextValue = useMemo(
    () => ({
      productCart,
      setProductCart,
    }),
    [productCart],
  );

  return (
    <NavbarContext.Provider value={contextValue}>
      {children}
    </NavbarContext.Provider>
  );
}

export const useNavbarContext = (): TNavbarContext => useContext(NavbarContext);
