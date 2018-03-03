import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from './list';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Descrição:</label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <Link to='/product/list' className="button cancel">Cancelar</Link>
        <input type="submit" value="Salvar" className="button save" />
      </form>
    );
  }
}

export default ProductForm;
