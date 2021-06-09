//References code from Ben Awad React Hooks Game of Life with a redux twist

import React, { useCallback, useRef } from "react";
import Button from "../button/Button";
import { useSelector, useDispatch } from "react-redux";
import { getGameStatus, getRows, getCols, getGrid } from "../../gameSelectors";
const cloneDeep = require("lodash.clonedeep");
import { neighborChecks } from "./NeighborChecks";

/**
 * @component Menu component for the controls for game of life
 */
const Menu = () => {
  const dispatch = useDispatch();
  const grid = useSelector(getGrid);
  const rows = useSelector(getRows);
  const cols = useSelector(getCols);
  const running = useSelector(getGameStatus);

  // Create reference to game state
  const runningRef = useRef(running);
  runningRef.current = running;

  // Create reference to the grid
  const gridRef = useRef(grid);
  gridRef.current = grid;

  // Handles starting and stopping of game
  const handleStartStop = () => {
    dispatch({ type: "START_STOP", value: !running });
    runningRef.current = true;
    runSimulation();
  };

  // Dispatches the clear grid action
  const clearGrid = () => {
    dispatch({ type: "CLEAR_GRID" });
  };

  // Dispatches the generate random grid action
  const generateRandom = () => {
    dispatch({ type: "RANDOM_GRID" });
  };

  //Handles running the simulation when game is running
  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    //Create temp to mutate ref
    let temp = cloneDeep(gridRef.current);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        //For each cell start count of neighbors at 0
        let neighbors = 0;
        //Tally neighbors
        neighborChecks.forEach(([x, y]) => {
          const neighborI = i + x;
          const neighborJ = j + y;
          if (
            neighborI >= 0 &&
            neighborI < rows &&
            neighborJ >= 0 &&
            neighborJ < cols
          ) {
            neighbors += gridRef.current[neighborI][neighborJ] > 1 ? 1 : 0;
          }
        });
        //If it is no longer active
        if (neighbors < 2 || neighbors > 3) {
          //Change value based on whether it was or was not active before
          temp[i][j] > 1 ? (temp[i][j] = 1) : (temp[i][j] = 0);
          //If it's active
        } else if (grid[i][j] === 0 && neighbors === 3) {
          temp[i][j] = 2;
        }
      }
    }
    //Dispatch mutated temp grid
    dispatch({ type: "GRID_UPDATE", grid: temp });
    setTimeout(runSimulation, 100);
  }, []);

  return (
    <div>
      <Button
        name={running ? "Stop" : "Start"}
        disable={false}
        onClick={() => {
          handleStartStop();
        }}
      />
      <Button
        name={"Clear Board"}
        disable={false}
        onClick={() => {
          clearGrid();
        }}
      />
      <Button
        name={"Generate New Board"}
        disable={running}
        onClick={() => {
          generateRandom();
        }}
      />
    </div>
  );
};

export default Menu;
