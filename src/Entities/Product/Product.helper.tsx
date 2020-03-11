import {find, propEq} from 'ramda';

import {Item} from '../Item/Item';
import {Product, Products} from './Product';
import {floatToTwoDP} from '../../Helpers/Number.helpers';

export const getProductByName = (name: string): Product => {
  const product = find(propEq('name', name), Products);

  if (!product) throw Error(`Product ${name} could not be found`);

  return product;
};

export const getProductByItem = (item: Item): Product => getProductByName(item.productName);

export const getItemPrice = (item: Item): number => {
  const product: Product = getProductByItem(item);

  if (product.priceType === 'byValue') return product.value;

  if (!item.weight) throw Error(`Item ${item.productName} could not be valued without weight defined`);

  return floatToTwoDP(product.perKg * item.weight);
};

export const getItemsPrice = (items: Item[]): number => {
  const priceArray: number[] = items.map(getItemPrice);

  return priceArray.reduce((total, item) => item + total, 0);
};