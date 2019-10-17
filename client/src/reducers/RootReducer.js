import searchReducer from './SeachReducer'
import destinationReducers from './DestinationReducers'
import filterReducers from './FilterReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    search: searchReducer,
    destinations: destinationReducers,
    filters: filterReducers
});

export default rootReducer