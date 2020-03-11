import {getItemPrice, getProductByItem, productRequiresWeight} from '../../Entities/Product/Product.helper';
import {ProductByWeight} from '../../Entities/Product/Product';
import React from 'react';
import {Item} from '../../Entities/Item/Item';
import {pipe} from 'ramda';


export const printProductWeight = (item: Item) => `${item.weight}kg @ £${(getProductByItem(item) as ProductByWeight).perKg}/kg`;

export const getFixedItemPrice = (item: Item) => getItemPrice(item).toFixed(2);

export const doesProductRequireWeight = pipe(getProductByItem, productRequiresWeight);

