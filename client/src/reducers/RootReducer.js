import searchReducer from './SeachReducer'
import sortReducers from './SortReducers'
import destinationReducer from './DestinationReducer'
import { combineReducers } from 'redux'



const rootReducer = combineReducers({
    search: searchReducer,
    sort: sortReducers,
    destination: destinationReducer,
});

export default rootReducer