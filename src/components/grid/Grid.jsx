import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGrid } from "../../gameSelectors";
import Cell from "../cell/Cell";
import styles from "./Grid.css";

/**
 * @component Grid to display rows and columns of cells
 */
const Grid = () => {
  const grid = useSelector(getGrid);
  const dispatch = useDispatch();

  // Handles when an individual cell is clicked
  const handleClick = (i, j) => {
    dispatch({
      type: "ACTIVATE_CELL",
      i,
      j,
    });
  };

  // Map through the grid to create cell components
  const gridCells = grid.map((rows, i) =>
    rows.map((col, j) => (
      <Cell
        key={`${i}-${j}`}
        alive={grid[i][j]}
        onClick={handleClick}
        i={i}
        j={j}
      />
    ))
  );

  return <div className={`${styles.columns}`}>{gridCells}</div>;
};

export default Grid;
