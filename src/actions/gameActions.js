
export const startGame = () => ({
  type: 'START_GAME'
});

export const stopGame = () => ({
  type: 'STOP_GAME'
});

//Create a random board function later and put as payload here
export const newGame = () => ({
  type: 'NEW_GAME'
});

export const clearBoard = () => ({
  type: 'CLEAR_BOARD'
});

export const activateCell = (r, c) => ({
  type: 'ACTIVATE_CELL',
  payload: { r, c }
});
