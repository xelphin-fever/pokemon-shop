import React from 'react'
import {Link} from "react-router-dom";
import logo from '../images/pokeball.png'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>
        <img className="logo" src={logo} alt="logo"/>
      </Link>
      <ul className='nav-links'>
        <Link to='/shop'>
          <li>Shop</li>
        </Link>
        <Link to='/checkout'>
          <li>
            <ShoppingCartOutlinedIcon/>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;