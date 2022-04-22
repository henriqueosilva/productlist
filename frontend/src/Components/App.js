import React from 'react'
import Landing from './Landing';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import Add from './Products/Add';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<Landing />} />
        <Route path='/addproduct' element={<Add />} />
      </Switch>
    </Router>
  );
}

export default App;
