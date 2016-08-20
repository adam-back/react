import React from 'react'
import { Link } from 'react-router'
require( '../index.css' );

export default function( props ) {
  return <Link { ...props } activeClassName='active'>{ props.children }</Link>
};