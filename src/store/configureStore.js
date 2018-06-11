import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import locationReducer from '../screens/Auth/reducers';
import homeDocumentsReducer from '../screens/Home/reducers';

const rootReducer = combineReducers({
    location: locationReducer,
    homeDocuments: homeDocumentsReducer
});

let composeEnhancers = compose;

if(__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
