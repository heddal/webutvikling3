import React from 'react';
import Main from './pages/Main';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/RootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import SearchPage from './pages/SearchPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Destination from './pages/Destination'


const store = createStore(rootReducer, applyMiddleware(thunk)) ;



function App() {
  return (
    <Provider store = {store}>
      <Router>

        <Route path="/main" component={Main} />
        <Route path="/search" component={SearchPage} />
        <Route path="/destination" component={Destination} />

      </Router>
    </Provider>
  );
}

export default App;

