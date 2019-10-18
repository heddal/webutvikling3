import searchReducer from './SeachReducer'
import destinationReducers from './DestinationReducers'
import sortReducers from './SortReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    search: searchReducer,
    destinations: destinationReducers,
    filters: sortReducers
});

export default rootReducer