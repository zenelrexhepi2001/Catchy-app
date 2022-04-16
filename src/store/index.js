import {combineReducers,createStore,applyMiddleware} from 'redux'; 
import ReduxThunk from 'redux-thunk'; 
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import AuthReducer from '../reducers/auth';

const rootReducer = combineReducers({
   Auth: AuthReducer,
});

export const store = createStore(rootReducer,applyMiddleware(ReduxThunk,logger));