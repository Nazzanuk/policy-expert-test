import {Basket} from '../Basket/Basket';

export interface Discount {
  label: string;
  amount: number;
}

export type DiscountFunction = (basket: Basket, productName: string) => Discount[];
