import React from 'react';
import Card from './components/Card';
import Main from './pages/Main';
import Destination from './pages/Destination';
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
      <Destination />
    </Provider>
  );
}

export default App;

