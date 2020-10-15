import React from 'react';
import Menu from '../Menu/Menu';
import Grid from './Grid/Grid';

/** 
* Gameboard component that has a menu and grid children
* @component 
*/
const Gameboard = () => {
  return (
    <>
      <Menu/>
      <Grid/>
    </>
  );
};

export default Gameboard;
