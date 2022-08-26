import {legacy_createStore,combineReducers, applyMiddleware} from 'redux';
import { TaskReducer } from './Tasks/TaskReducer';
import thunk from 'redux-thunk';

const rootRuducer=combineReducers({
    tasks:TaskReducer,
});

export const Store=legacy_createStore(rootRuducer,applyMiddleware(thunk));