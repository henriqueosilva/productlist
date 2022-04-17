import React from 'react';
import AddProduct from './Products/AddProduct';
import ListProduct from './Products/ListProduct';
import Landing from './Products/Landing';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' element={<Landing />}>
          <Route index element={<ListProduct />}/>
          <Route path='addproduct' element={<AddProduct />}/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
