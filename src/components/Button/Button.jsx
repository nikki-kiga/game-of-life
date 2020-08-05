import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ name, gameStatus, onClick }) => {
  return (
    <button disabled={gameStatus} onClick={onClick}>
      {name}
    </button>
  );
};

Buttons.propTypes = {
  name: PropTypes.string.isRequired,
  gameStatus: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Buttons;
