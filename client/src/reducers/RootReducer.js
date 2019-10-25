import sortReducers from './SortReducers';
import destinationReducer from './DestinationReducer';
import lengthReducer from './LengthReducer';
import filterReducer from './FilterReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    filter: filterReducer,
    sort: sortReducers,
    destination: destinationReducer,
    length: lengthReducer,
});

export default rootReducer