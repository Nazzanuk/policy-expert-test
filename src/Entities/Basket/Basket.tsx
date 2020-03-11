import {curry, remove} from 'ramda';

import {Item} from '../Item/Item';
import {floatToTwoDP} from '../../Helpers/Number.helpers';
import {getItemsPrice} from '../Product/Product.helper';

export type Basket = Item[];

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