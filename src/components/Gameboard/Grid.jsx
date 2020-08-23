import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGrid, getCols } from '../../gameSelectors';

const Grid = () => {
  const grid = useSelector(getGrid);
  const cols = useSelector(getCols);

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
      <div key={`${i}-${j}`}
        onClick={() => {handleClick(i, j);}}
        style = {{ width: 20, height: 20, 
          backgroundColor: grid[i][j] ? 'pink' : undefined,
          border: 'solid 1px black'
        }}/>
    )
  );

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 20px)`
    }}>
      {
        gridCells
      }
      
    </div>
  );
};

export default Grid;
