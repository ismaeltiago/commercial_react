import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ProductList from './components/Product/list';
import ProductNew from './components/Product/new';
import ProductEdit from './components/Product/edit';

const Main = () => (
  <main>
    <BrowserRouter>
      <Route exact path='/product/list' component={ProductList}/>
      <Route exact path='/product/new' component={ProductNew}/>
      <Route exact path='/product/:number/edit' component={ProductEdit}/>
    </BrowserRouter>
  </main>
)

export default Main
