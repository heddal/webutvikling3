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
import SearchPage from './pages/SearchPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


const store = createStore(rootReducer, applyMiddleware(thunk)) ;



function App() {
  return (
    <Provider store = {store}>
      <Router>

        <Route path="" component={Main} />
        <Route path="/search" component={SearchPage} />
        <Route path="/destination" component={Destination} />

      </Router>
    </Provider>
  );
}

export default App;

/*
<Card />
<Main />
<Searchbox />
*/