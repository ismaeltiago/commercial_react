import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <Link to='/entity'>produto 1</Link>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Product;
