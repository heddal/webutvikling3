import React from 'react';
import './App.css';
import Searchbox from './components/Searchbox'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/RootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk)) ;



function App() {
  return (
    <Provider store = {store}>
      <Searchbox/>
    </Provider>
  );
}

export default App;
