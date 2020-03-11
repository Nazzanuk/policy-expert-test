import {curry} from 'ramda';

import {Item} from '../Item/Item';

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
  return [];
});