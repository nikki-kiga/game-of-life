import React from 'react';
import Board from './Board';
import { useBoard } from '../../hooks/gameContext';

const Gameboard = () => {

  const board = useBoard();

  return (
    <Board data={board}/>
  );
};

export default Gameboard;
