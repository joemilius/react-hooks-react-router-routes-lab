import React from "react";
import { NavLink } from "react-router-dom";
import Home from './Home';
import Actors from './Actors';
import Directors from './Directors';
import Movies from './Movies';

function NavBar() {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/movies'>
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/directors'>
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/actors'>
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
