import React from 'react';
import Main from './pages/Main';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/RootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, applyMiddleware(thunk)) ;



function App() {
  return (
    <Provider store = {store}>
      
      <Main />
      

    </Provider>
  );
}

export default App;

