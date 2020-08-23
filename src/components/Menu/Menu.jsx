//References code from Ben Awad React Hooks Game of Life

import React, { useCallback, useRef } from 'react';
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { getGameStatus, getRows, getCols, getGrid } from '../../gameSelectors';

const Menu = () => {
  const dispatch = useDispatch();
  const grid = useSelector(getGrid);
  const rows = useSelector(getRows);
  const cols = useSelector(getCols);
  const running = useSelector(getGameStatus);


  const runningRef = useRef(running);
  runningRef.current = running;

  const gridRef = useRef(grid);
  gridRef.current = grid;

  const handleStartStop = () => {
    dispatch({ type: 'START_STOP', value: !running });
    runningRef.current = true;
    runSimulation();
  };

  const clearGrid = () => {
    dispatch({ type: 'CLEAR_GRID' });
  };

  const generateRandom = () => {
    dispatch({ type: 'RANDOM_GRID' });
  };

  const neighborChecks = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1]
  ];

  const runSimulation = useCallback(() => {
    if(!runningRef.current){
      return;
    }
    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
        let neighbors = 0;
        neighborChecks.forEach(([x, y]) => {
          const neighborI = i + x;
          const neighborJ = j + y;
          if(neighborI >= 0 && neighborI < rows && neighborJ >= 0 && neighborJ < cols) {
            neighbors += gridRef.current[neighborI][neighborJ];
          }
        });
        if(neighbors < 2 || neighbors > 3) {
          dispatch({ type: 'CELL_CYCLE', i, j, value: 0 });
        } else if(grid[i][j] === 0 && neighbors === 3) {
          dispatch({ type: 'CELL_CYCLE', i, j, value: 1 });
        }
      }
    }
    setTimeout(runSimulation, 1000);
  }, []);

  return (
    <div>
      <Button name={running ? 'Stop' : 'Start'} disable={false} onClick={() => {handleStartStop();}}/>
      <Button name={'Clear Board'} disable={false} onClick={(() => {clearGrid();})}/>
      <Button name={'Generate New Board'} disable={running} onClick={(() => {generateRandom();})}/>
    </div>
  );
};

Menu.propTypes = {
    
};

export default Menu;
