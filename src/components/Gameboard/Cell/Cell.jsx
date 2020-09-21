import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cell.css';

function Cell({ alive, onClick, i, j }) {
  const aliveStyle = alive > 0 ? alive > 1 ? styles.born : styles.alive : '';

  return (
    <button
      type='button'
      className = {`${styles.cell} ${aliveStyle}`}
      onClick={() => onClick(i, j)}>
    </button>
  );
}

Cell.propTypes = {
  alive : PropTypes.number,
  onClick : PropTypes.func,
  i: PropTypes.number,
  j: PropTypes.number
};

export default Cell;

