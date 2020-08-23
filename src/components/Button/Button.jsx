import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ name, disable, onClick }) => {
  return (
    <button disabled={disable} onClick={onClick}>
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
