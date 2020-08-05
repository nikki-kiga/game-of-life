import React from 'react';
import { GameContext } from './hooks/gameContext';
import { useReducer } from 'react';
import reducer, { initialState } from './gameReducer';

// eslint-disable-next-line react/prop-types
const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
