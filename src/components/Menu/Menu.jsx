import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Menu = () => {
  return (
    <div>
      <Button name={'Start'} gameStatus={true} onClick={(() => {})}/>
      <Button name={'Stop'} gameStatus={false} onClick={(() => {})}/>
      <Button name={'Clear Board'} gameStatus={false} onClick={(() => {})}/>
      <Button name={'New Board'} gameStatus={false} onClick={(() => {})}/>

    </div>
  );
};

Menu.propTypes = {
    
};

export default Menu;
