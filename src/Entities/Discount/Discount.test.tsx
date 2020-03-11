import {Basket} from '../Basket/Basket.class';
import {Item} from '../Item/Item';
import {threeForTwo, twoForPound} from './Discount';

const beans: Item = {productName: 'Beans'};
const coke: Item = {productName: 'Coke'};

describe('Discounts', () => {
  it('Three for Two', () => {
    const match = [{label: 'Beans 3 for 2', amount: 0.5}];

    const basket: Basket = new Basket().addItems([beans, beans, beans]);

    const result = threeForTwo(basket, 'Beans');

    expect(result).toMatchObject(match);
  });

  it('Three for Two multiple instances', () => {
    const match = [
      {label: 'Beans 3 for 2', amount: 0.5},
      {label: 'Beans 3 for 2', amount: 0.5},
    ];

    const basket: Basket = new Basket().addItems([beans, beans, beans, beans, beans, beans]);

    const result = threeForTwo(basket, 'Beans');

    expect(result).toMatchObject(match);
  });

  it('Two for a Pound instances', () => {
    const match = [{label: 'Coke 2 for £1', amount: 0.4}];

    const basket: Basket = new Basket().addItems([coke, coke]);

    const result = twoForPound(basket, 'Coke');

    expect(result).toMatchObject(match);
  });

  it('Two for a Pound multiple instances', () => {
    const match = [
      {label: 'Coke 2 for £1', amount: 0.4},
      {label: 'Coke 2 for £1', amount: 0.4},
    ];

    const basket: Basket = new Basket().addItems([coke, coke, coke, coke]);

    const result = twoForPound(basket, 'Coke');

    expect(result).toMatchObject(match);
  });

  it('Discount mix', () => {
    const match = [
      {label: 'Coke 2 for £1', amount: 0.4},
      {label: 'Beans 3 for 2', amount: 0.5},
    ];

    const basket: Basket = new Basket().addItems([coke, beans, coke, beans, beans, beans]);

    const result = [
      ...twoForPound(basket, 'Coke'),
      ...threeForTwo(basket, 'Beans')
    ];

    expect(result).toMatchObject(match);
  });

});