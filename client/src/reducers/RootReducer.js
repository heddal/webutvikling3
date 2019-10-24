import sortReducers from './SortReducers'
import destinationReducer from './DestinationReducer'
import { combineReducers } from 'redux'
import filterReducer from './FilterReducer';



const rootReducer = combineReducers({
    filter: filterReducer,
    sort: sortReducers,
    destination: destinationReducer,
});

export default rootReducer