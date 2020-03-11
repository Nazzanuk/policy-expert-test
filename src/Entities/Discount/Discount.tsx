import {curry, times} from 'ramda';

import {Item} from '../Item/Item';
import {getProductByName} from '../Product/Product.helper';
import {ProductByValue} from '../Product/Product';
import {Basket} from '../Basket/Basket';
import {fixFloat} from '../../Helpers/Number.helpers';

export interface Discount {
  label: string;
  amount: number;
}

export type DiscountFunction = ReturnType<typeof threeForTwo>;

export const threeForTwo = curry((productName: string, basket: Basket) => {
  const product = getProductByName(productName) as ProductByValue;

  const matchingItems: number = basket.reduce((amount: number, item: Item) => {
    if (item.productName === productName) return amount + 1;

    return amount;
  }, 0);

  const sets: number = Math.floor(matchingItems / 3);
  return times(() => ({label: `${productName} 3 for 2`, amount: product.value}), sets);
});

export const twoForPound: DiscountFunction = curry((productName, basket): Discount[] => {
  const product = getProductByName(productName) as ProductByValue;

  const matchingItems: number = basket.reduce((amount: number, item: Item) => {
    if (item.productName === productName) return amount + 1;

    return amount;
  }, 0);

  const sets: number = Math.floor(matchingItems / 2);

  return times(() => ({label: `${productName} 2 for £1`, amount: fixFloat((product.value * 2) - 1)}), sets);
});
