import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    // alert('A name was submitted: ' + this.state.value);

    // if (!event.target.checkValidity()) {
    //   // form is invalid! so we do nothing
    //   return;
    // }

    // const data = new FormData(event.target);
    
    // fetch('http://localhost:3001/products', {
    //   method: 'POST',
    //   body: data,
    // });

    // const data = {
    var data = {
      product: {
        description: 'vai react'
      }
    };

    axios.post('http://localhost:3001/products', data).then((result) => {
      console.log(result);
    });

debugger

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
