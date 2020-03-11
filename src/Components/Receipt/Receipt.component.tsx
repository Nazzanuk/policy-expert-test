import './Receipt.component.scss';

import React, {FC, useContext} from 'react';
import {BasketContext} from '../../Context/Basket.context';
import {doesProductRequireWeight, getFixedItemPrice, printProductWeight} from './Receipt.component.helper';


export const Receipt: FC = () => {
  const Basket = useContext(BasketContext);

  return <div data-component="Receipt">
    <div className="list-header">
      <div className="header-item">Product</div>
      <div className="header-item">Price</div>
    </div>

    <div className="product-line"/>

    <div className="product-list">
      {Basket.getItems().map((item, index) => <>
        <div className="list-item" key={index + 'item'}>
          <div className="header-x" onClick={() => Basket.removeItem(index)}><i className="fal fa-times"/></div>
          <div className="item">{item.productName}</div>
          <div className="item">
            {!doesProductRequireWeight(item) && getFixedItemPrice(item)}
          </div>
        </div>

        {doesProductRequireWeight(item) && <div className="list-item" key={index + 'weight'}>
            <div className="header-x"/>
            <div className="item">{printProductWeight(item)}</div>
            <div className="item">{getFixedItemPrice(item)}</div>
        </div>}
      </>)}

      {!Basket.getItems().length && <div className="no-item">No Items</div>}
    </div>

    <div className="product-line"/>
    <div className="list-item strong">
      <div className="item">Sub-total</div>
      <div className="item">{Basket.getSubTotal().toFixed(2)}</div>
    </div>
    <div className="product-line"/>


    <div className="product-list">
      {Basket.getDiscountList().map((item, index) =>
        <div className="list-item" key={index + item.label}>
          <div className="item">{item.label}</div>
          <div className="item">-{item.amount.toFixed(2)}</div>
        </div>,
      )}
    </div>

    <div className="list-item strong">
      <div className="item">Total Savings</div>
      <div className="item">-{Basket.getDiscountAmount().toFixed(2)}</div>
    </div>
    <div className="product-line"/>
    <div className="list-item strong">
      <div className="item">Total to Pay</div>
      <div className="item">{Basket.getTotal().toFixed(2)}</div>
    </div>
    <div className="product-line"/>
  </div>;
};