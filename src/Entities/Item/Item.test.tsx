import {Item} from './Item';
import {getItemPrice, getProductByItem} from '../Product/Product.helper';

const beans: Item = {productName: 'Beans'};
const oranges: Item = {productName: 'Oranges', weight: 0.2};

describe('Item / Product Information Methods', () => {
  it('Should be able to get the Product from an item', () => {
    const result = getProductByItem(beans);

    expect(result).toMatchObject({name: 'Beans', priceType: 'byValue', value: 0.5});
  });

  it('Should be able to get the price of an item by value', () => {
    const result = getItemPrice(beans);

    expect(result).toEqual(0.5);
  });

  it('Should be able to get the price of an item by weight', () => {
    const result = getItemPrice({productName: 'Oranges', weight: 1});

    expect(result).toEqual(1.99);
  });

  it('Should be able to get the dynamic price of an item by weight', () => {
    const result = getItemPrice(oranges);

    expect(result).toEqual(0.4);
  });
});