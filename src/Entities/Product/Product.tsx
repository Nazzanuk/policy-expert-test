export type ProductByValue = {
  priceType: 'byValue';
  value: number;
}

export type ProductByWeight = {
  priceType: 'byWeight';
  perKg: number;
}

export type Product = {
  name: string;
} & (ProductByValue | ProductByWeight)

export const Products: Product[] = [
  {
    name: 'Beans',
    priceType: 'byValue',
    value: 0.5,
  },
  {
    name: 'Coke',
    priceType: 'byValue',
    value: 0.7,
  },
  {
    name: 'Oranges',
    priceType: 'byWeight',
    perKg: 1.99,
  },
];


