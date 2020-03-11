import React, {createContext, FC, useState} from 'react';
import {addItemToBasket, createBasket, getBasketDiscountAmount, getBasketDiscountList, getBasketSubtotal, getBasketTotal, removeItemFromBasketAtIndex} from '../Entities/Basket/Basket';
import {Item} from '../Entities/Item/Item';
import {threeForTwo, twoForPound} from '../Entities/Discount/Discount';

const discounts = [threeForTwo('Beans'), twoForPound('Coke')];

type BasketState = ReturnType<typeof useBasket>

export const BasketContext = createContext({} as BasketState);

const useBasket = () => {
  const [basket, setBasket] = useState(createBasket());

  const addItem = (item: Item) => setBasket(addItemToBasket(item));

  const removeItem = (index: number) => setBasket(removeItemFromBasketAtIndex(index));

  const getItems = () => basket;

  const getDiscountList = () => getBasketDiscountList(discounts, basket);

  const getDiscountAmount = () => getBasketDiscountAmount(discounts, basket);

  const getTotal = () => getBasketTotal(discounts, basket);

  const getSubTotal = () => getBasketSubtotal(basket);

  return {addItem, removeItem, getItems, getTotal, getSubTotal, getDiscountAmount, getDiscountList};
};

export const BasketProvider: FC = ({children}) => <BasketContext.Provider value={useBasket()}>{children}</BasketContext.Provider>;
