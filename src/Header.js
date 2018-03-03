import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav id="header">
        <ul>
          <li>
            <Link to='/product/list'>Produto</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
