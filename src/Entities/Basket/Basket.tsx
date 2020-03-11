import {curry, remove} from 'ramda';

import {Item} from '../Item/Item';
import {floatToTwoDP} from '../../Helpers/Number.helpers';
import {getItemsPrice} from '../Product/Product.helper';
import {Discount, threeForTwo} from '../Discount/Discount';

export type Basket = Item[];

const x = threeForTwo('ss');

export type d = ReturnType<typeof x>;

export const createBasket = (items: Item[] = []): Basket => {
  return items;
};

export const addItemToBasket = curry((item: Item, basket: Basket): Basket => {
  return [...basket, item];
});

export const addItemsToBasket = curry((items: Item[], basket: Basket): Basket => {
  return [...basket, ...items];
});

export const removeItemFromBasketAtIndex = curry((index: number, basket: Basket): Basket => {
  return remove(index, 1, basket);
});

export const getBasketSubtotal = (basket: Basket): number => {
  return floatToTwoDP(getItemsPrice(basket));
};

export const getBasketDiscountList = (discounts: any[], basket: Basket): Discount[] => {
  return discounts.reduce((list: Discount[], discount) => [...list, ...discount(basket)], []);
};