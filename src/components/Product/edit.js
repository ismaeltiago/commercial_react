import React, { Component } from 'react';
import ProductForm from './form';

class ProductEdit extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Editar Produto</h1>
        <ProductForm />
      </div>
    );
  }
}

export default ProductEdit;
