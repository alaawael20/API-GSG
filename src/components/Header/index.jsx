import React from 'react';
import './style.css';
import { PATHS } from './../../router/paths';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <NavLink to={PATHS.HOME}><h1>GSG-API</h1></NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to={PATHS.HOME}>
                {({ isActive, isPending }) => (isActive ? <u>Home</u> : 'Home')}
              </NavLink>
            </li>
            <li>
              <NavLink to={PATHS.STORES.ROOT}>
                {({ isActive, isPending }) =>
                  isActive ? <u>Stores</u> : 'Stores'
                }
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
