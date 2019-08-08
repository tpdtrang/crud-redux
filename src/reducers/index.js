import { combineReducers } from 'redux';
import StoreReducer from './reducer';
const rootReducer = combineReducers({
    stores: StoreReducer
});
export default rootReducer;