import {Basket, createBasket} from '../Basket/Basket';
import {Item} from '../Item/Item';

const beans: Item = {productName: 'Beans'};
const coke: Item = {productName: 'Coke'};

describe('Discounts', () => {
  it('Three for Two', () => {
    const match = [{label: 'Beans 3 for 2', amount: 0.5}];

    const basket: Basket = createBasket([beans, beans, beans]);

    const result = threeForTwo(basket, 'Beans');

    expect(result).toMatchObject(match);
  });
});