import React, { memo } from "react";
import PropTypes from "prop-types";

import styles from "./Cell.css";

/**
 * Cell component that returns buttons with specific styles
 * @component
 * @param {number} alive number representing cell life cycle
 * @param {func} onClick function executed on click
 * @param {number} i index of the row
 * @param {number} j index of column
 */
const Cell = memo(({ alive, onClick, i, j }) => {
  const aliveStyle = alive > 0 ? (alive > 1 ? styles.born : styles.alive) : "";

  return (
    <button
      type="button"
      className={`${styles.cell} ${aliveStyle}`}
      onClick={() => onClick(i, j)}
    ></button>
  );
});

Cell.propTypes = {
  alive: PropTypes.number,
  onClick: PropTypes.func,
  i: PropTypes.number,
  j: PropTypes.number,
};

export default Cell;
