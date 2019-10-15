import searchReducer from './SeachReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    search: searchReducer
});

export default rootReducer