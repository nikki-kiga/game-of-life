import React, { useContext } from 'react';

export const GameContext = React.createContext();

export const useState = () => {
  const { state } = useContext(GameContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(GameContext);
  return dispatch;
};

export const useBoard = () => {
  const { board } = useState();
  return board;
};

export const useGameControl = () => {
  const dispatch = useDispatch();
  return action => {
    dispatch(action);
  };
};
