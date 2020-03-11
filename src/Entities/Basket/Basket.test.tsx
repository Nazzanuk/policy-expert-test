import {addItemToBasket, Basket, createBasket} from './Basket';
import {Item} from '../Item/Item';

const beans: Item = {productName: 'Beans'};

describe('Basket - Shopping Basket Methods', () => {
  let basket: Basket;

  beforeEach(() => {
    basket = createBasket();
  });

  it('Should be able to create an empty basket', () => {
    expect(basket).toMatchObject([]);
  });

  it('Should be able to add an item to a basket', () => {
    const result = addItemToBasket(beans);

    expect(result).toMatchObject([beans]);
  });
});