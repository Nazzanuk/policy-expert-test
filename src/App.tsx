import './App.scss';

import React, {FC} from 'react';
import {ItemForm} from './Components/ItemForm/ItemForm.component';
import {BasketProvider} from './Context/Basket.context';
import {Receipt} from './Components/Receipt/Receipt.component';

export const App: FC = () => {
  return <BasketProvider>
    <div className="App">
      <div className="app-layout">
        <ItemForm/>
        <Receipt/>
      </div>
    </div>
  </BasketProvider>;
};

export default App;
