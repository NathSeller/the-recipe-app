import React from 'react';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import Searched from './Searched';
import Category from './Category';
import Meal from './Meal';

function Pages() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/searched/:search' element={<Searched />} />
          <Route path='/category/:type' element={<Category />} />
          <Route path='/meal/:meal' element={<Meal />} />
        </Routes>
    </div>
  )
}

export default Pages;