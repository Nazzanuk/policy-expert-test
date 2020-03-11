import {Item} from '../../Entities/Item/Item';
import {doesProductRequireWeight, getFixedItemPrice, printProductWeight} from './Receipt.component.helper';

const oranges: Item = {productName: 'Oranges', weight: 0.2};

describe('Receipt Component', () => {
  it('Print Product Weight', () => {
    const result = printProductWeight(oranges);

    expect(result).toBe('0.2kg @ £1.99/kg');
  });

  it('Get item price string to 2dp', () => {
    const result = getFixedItemPrice(oranges);

    expect(result).toBe('0.40');
  });

  it('check if product requires weight', () => {
    const result = doesProductRequireWeight(oranges);

    expect(result).toBe(true);
  });
});
