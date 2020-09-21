import { createReducer } from '@reduxjs/toolkit';

export const initialState = {
  live: false,
  cols: 50,
  rows: 40,
  grid: new Array(40).fill(0).map(() => new Array(50).fill(0))
};

export const reducer = createReducer(initialState, builder => {
  builder
    .addCase('ACTIVATE_CELL', (state, action) => {
      state.grid[action.i][action.j] = state.grid[action.i][action.j] ? 0 : 2;
    })
    .addCase('GRID_CYCLE', (state, action) => {
      state.grid = action.grid;
    })
    .addCase('START_STOP', (state, action) => {
      state.live = action.value;
    })
    .addCase('CLEAR_GRID', (state) => {
      state.grid = new Array(state.rows).fill(0).map(() => new Array(state.cols).fill(0));
    })
    .addCase('RANDOM_GRID', (state) => {
      state.grid = new Array(state.rows).fill(0).map(() => Array.from(Array(state.cols), () => (Math.random() < 0.2 ? 2 : 0)));
    })
    .addDefaultCase((state) => {
      return state;
    });

});
