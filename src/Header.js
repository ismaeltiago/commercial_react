import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav id="header">
        <ul>
          <li>
            <Router>
              <Link to='/product/list'>Produto</Link>
            </Router>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
