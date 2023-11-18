export type TProduct = {
  idProduct: number;
  dsProduct: string;
  dsUrl: string;
  vlPrice: number;
  dsBrand?: string;
  qtStock: number;
};

export type TProductCart = TProduct & {
  qtProduct: number;
};

export type TProductTrack = TProductCart & {
  dsStatus: string;
  dtOrder: string;
};
