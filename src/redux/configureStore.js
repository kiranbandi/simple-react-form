import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';  
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
        store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
    return store;
}