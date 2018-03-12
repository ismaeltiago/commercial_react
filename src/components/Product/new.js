import React, { Component } from 'react';
import ProductForm from './form';

class ProductNew extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h1>Criar Produto</h1>
        <ProductForm />
      </div>
    );
  }
}

export default ProductNew;
