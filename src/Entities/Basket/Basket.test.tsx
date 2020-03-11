import {addItemsToBasket, addItemToBasket, Basket, createBasket} from './Basket';
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

  it('Should be able to create a basket with items', () => {
    const match = [beans, beans];

    basket = createBasket([beans, beans]);

    expect(basket).toMatchObject(match);
  });

  it('Should be able to add an item to a basket', () => {
    const match = [beans];

    const result = addItemToBasket(basket, beans);

    expect(result).toMatchObject(match);
  });

  it('Should be able to add items to a basket', () => {
    const match = [beans, beans];

    const result = addItemsToBasket(basket, [beans, beans]);

    expect(result).toMatchObject(match);
  });
});