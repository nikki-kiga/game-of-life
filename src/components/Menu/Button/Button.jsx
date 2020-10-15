import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';

/** 
 * Button component
 * @component
 * @param {string} name number representing cell life cycle
 * @param {boolean} disable whether button should be disabled
 * @param {onClick} onClick function that executes onClick
*/
const Buttons = ({ name, disable, onClick }) => {
  return (
    <button
      className={styles.menuButton}
      disabled={disable} 
      onClick={onClick}>
      {name}
    </button>
  );
};

Buttons.propTypes = {
  name: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Buttons;
