
import store from '../App'
import addDestination from '../actions/DestinationActions'
import { searchWord, sortBy } from '../actions/FilterActions'
import destinationReducers from './reducers/destinationReducers';
import filterReducers from './reducers/filterReducers';
import { createStore, combineReducers } from 'redux';
import getVisibleDestinations from './DestinationFilters'


const store = createStore(
    combineReducers({
      destinations: destinationReducers,
      filters: filterReducers
    })
  );

const dest1 = store.dispatch(addDestination({
    continent: 'Asia',
    country: 'Japan',
    city: 'Kyoto'
}));

const dest2 = store.dispatch(addDestination({
    continent: 'Asia',
    country: 'Japan',
    city: 'Tokyo'
}));

const dest3 = store.dispatch(addDestination({
    continent: 'Europe',
    country: 'France',
    city: 'Paris'
}));

const dest4 = store.dispatch(addDestination({
    continent: 'Europe',
    country: 'Spain',
    city: 'Barcelona'
}));

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const destinations = getVisibleDestinations(state.destinations, state.filters);
    console.log(destinations);
});

console.log("Search word: 'an'");
store.dispatch(searchWord('an'));

console.log("Search word: 'Spain'");
store.dispatch(searchWord('Spain'));

console.log("Sort by: 'City'");
store.dispatch(sortBy('city'));