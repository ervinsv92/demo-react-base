import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { contadorReducer } from '../reducers/contadorReducer';
import thunk from 'redux-thunk';
import { paisesReducer } from '../reducers/paisesReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
   contador: contadorReducer,
   paises: paisesReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);