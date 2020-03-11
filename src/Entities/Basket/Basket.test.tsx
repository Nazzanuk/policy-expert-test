import {addItemsToBasket, addItemToBasket, Basket, createBasket, removeItemFromBasketAtIndex} from './Basket';
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

    const result = addItemToBasket(beans)(basket);

    expect(result).toMatchObject(match);
  });

  it('Should be able to add items to a basket', () => {
    const match = [beans, beans];

    const result = addItemsToBasket(basket, [beans, beans]);

    expect(result).toMatchObject(match);
  });

  it('Should be able to remove an item from a basket', () => {
    const match = [beans];

    const basket = createBasket([beans, beans]);

    const result = removeItemFromBasketAtIndex(1, basket);

    expect(result).toMatchObject(match);
  });
});