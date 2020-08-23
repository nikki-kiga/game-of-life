//Code references article by Nero Adaware from Dev.to
import { createStore, applyMiddleware  } from 'redux';
import { reducer, initialState } from './gameReducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&

    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ 
      trace: true, 
      traceLimit: 25 
    });

const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));
export default store;
