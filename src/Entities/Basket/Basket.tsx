import {Item} from '../Item/Item';

export type Basket = Item[];

export const createBasket = (): Item[] => {
  return [];
};

export const addItemToBasket = (basket: Basket, item: Item): Basket => {
  return [...basket, item];
};

export const addItemsToBasket = (basket: Basket, items: Item[]): Basket => {

};