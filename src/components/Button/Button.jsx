import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';

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
