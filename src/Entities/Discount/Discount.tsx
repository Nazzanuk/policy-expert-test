import {times} from 'ramda';

import {Item} from '../Item/Item';
import {getProductByName} from '../Product/Product.helper';
import {ProductByValue} from '../Product/Product';
import {Basket} from '../Basket/Basket';

export interface Discount {
  label: string;
  amount: number;
}

export type DiscountFunction = (productName: string, basket: Basket) => Discount[];

export const threeForTwo: DiscountFunction = (productName, basket) => {
  const product = getProductByName(productName) as ProductByValue;

  const matchingItems: number = basket.reduce((amount: number, item: Item) => {
    if (item.productName === productName) return amount + 1;

    return amount;
  }, 0);

  const sets: number = Math.floor(matchingItems / 3);
  return times(() => ({label: `${productName} 3 for 2`, amount: product.value}), sets);
};
