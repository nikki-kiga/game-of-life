import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGrid } from '../../gameSelectors';
import Cell from './Cell/Cell';
import styles from './Grid.css';

const Grid = () => {
  const grid = useSelector(getGrid);
  const dispatch = useDispatch();

  const handleClick = (i, j) => {
    dispatch({ 
      type: 'ACTIVATE_CELL',
      i,
      j
    });
  };

  const gridCells = grid.map((rows, i) => 
    rows.map((col, j) => 
      <Cell 
        key={`${i}-${j}`}
        alive={grid[i][j] ? true : false}
        onClick={handleClick}
        i={i}
        j={j}
      />
    )
  );

  return (
    <div className={`${styles.columns}`}>
      {
        gridCells
      }
    </div>
  );
};

export default Grid;
