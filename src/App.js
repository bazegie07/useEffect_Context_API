import React from 'react';

import './App.css';
import ShoppingCart from './contexts/ShoppingCart';
import Wrapper from './components/Wrapper';
import MiniCart from './components/Minicart';

function App() {
  return (
    <ShoppingCart.Provider value={[
      {
        title:'Toothpaste',
        brand: 'Charcoal Hippie',
        price:35,
        quantity: 1

      }
    ]}>
      <Wrapper>
        <Wrapper>
          <MiniCart />
        </Wrapper>
      </Wrapper>
    </ShoppingCart.Provider>
  )
}

export default App;
