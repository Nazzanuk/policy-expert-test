import {addItemsToBasket, addItemToBasket, Basket, createBasket, getBasketDiscountList, getBasketSubtotal, removeItemFromBasketAtIndex} from './Basket';
import {Item} from '../Item/Item';
import {threeForTwo, twoForPound} from '../Discount/Discount';

const beans: Item = {productName: 'Beans'};
const coke: Item = {productName: 'Coke'};
const oranges: Item = {productName: 'Oranges', weight: 0.2};

const discounts = [
  threeForTwo('Beans'),
  twoForPound('Coke'),
];

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

  it('Should be able to generate the subTotal price', () => {
    const basket = createBasket([beans, coke]);

    const result = getBasketSubtotal(basket);

    expect(result).toBe(1.2);
  });

  it('Should be able to generate a discount list', () => {
    const match = [{label: 'Beans 3 for 2', amount: 0.5}];

    const basket = createBasket([beans, beans, beans]);

    const result = getBasketDiscountList(discounts, basket);

    expect(result).toMatchObject(match);
  });

  it('Should be able to generate savings amount', () => {
    const items = [beans, beans, beans, coke, beans, coke, coke, beans, beans, beans];
    const match = 1.4;

    const basket = createBasket(items);

    const result = getBasketDiscountAmount(basket);

    expect(result).toBe(match);
  });

  it('Should be able to generate the total price', () => {
    const items = [beans, beans, beans, coke, coke, oranges];

    const basket = createBasket(items);
    const result = getBasketTotal(basket);

    expect(result).toBe(2.4);
  });
});