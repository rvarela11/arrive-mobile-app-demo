import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './screens/AuthScreen/reducer';

const rootReducer = combineReducers({
    auth: loginReducer
});

const configureStore = () => createStore(rootReducer, compose(applyMiddleware(thunk)));

export default configureStore;
