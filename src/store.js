import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './gameReducer';

const store = configureStore({ reducer: reducer });

export default store;
