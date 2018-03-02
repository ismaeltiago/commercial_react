import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Product />
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
