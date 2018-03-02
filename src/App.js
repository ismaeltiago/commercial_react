import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Product from './components/Product';
import Entity from './components/Entity';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <ul>
          <li>
            <Link to='/product'>Product</Link>
          </li>
          <li>
            <Link to='/entity'>Entity</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/product' component={Product}/>
          <Route exact path='/product/edit' component={Product.edit}/>
          <Route exact path='/entity' component={Entity}/>
        </Switch>
      </main>
    );
  }
}

export default App;
