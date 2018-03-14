import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import ProductList from './components/Product/list';
import ProductNew from './components/Product/new';
import ProductEdit from './components/Product/edit';

const Main = () => (
  <main>
    <Router>
      <Switch>
        <Route exact path='/product/list' component={ProductList}/>
        <Route exact path='/product/new' component={ProductNew}/>
        <Route exact path='/product/:number/edit' component={ProductEdit}/>
      </Switch>
    </Router>
  </main>
);

export default Main;
