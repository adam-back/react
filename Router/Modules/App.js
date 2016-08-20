import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'
import '../index.css'

export default function( props ) {
  return (
    <div>
      <h1>React Router Tutorial!</h1>
      <ul role='nav'>
        <li>
          <IndexLink activeClassName="active" to="/">Home</IndexLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/repos">Repos</NavLink>
        </li>
      </ul>

      { props.children }
    </div>
  );
};