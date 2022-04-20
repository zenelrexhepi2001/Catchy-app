import {combineReducers,createStore,applyMiddleware} from 'redux'; 
import ReduxThunk from 'redux-thunk'; 
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import AuthReducer from '../reducers/auth';
import FeaturesReducer from '../reducers/features';
import ProductReducer from '../reducers/product';

const rootReducer = combineReducers({
   Auth: AuthReducer,
   Features: FeaturesReducer,
   Product: ProductReducer,
});

export const store = createStore(rootReducer,applyMiddleware(ReduxThunk,logger));