import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(intinialState = {}) {
    const middlewares = [
        thunk
    ]
    const enhancers = [
        applyMiddleware(...middlewares)
    ]
    const store = createStore(
        reducer
        , intinialState
        , compose(...enhancers)
    )
    store.asyncReducers = {}
    return store
}