import React from 'react';
import AddProduct from './Products/AddProduct';
import ListProduct from './Products/ListProduct';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' element={<ListProduct />}/>
        <Route path='/addproduct' element={<AddProduct />}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
