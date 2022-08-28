import React from 'react';
import { Counter } from './features/counter/Counter';
import Product from './features/counter/Product';

function App() {
  return (
    <div style={{display:"flex", justifyContent:"space-evenly"}} >
{/* this is product page*/}
        <Product/>
        
{/* this is cart page*/}
        <Counter />
    </div>
  );
}

export default App;
