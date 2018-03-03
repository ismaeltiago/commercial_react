import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to='/product/new'>Criar produto</Link>
        </nav>
        <h1>Produtos</h1>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to='/product/1/edit'>produto 1</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
