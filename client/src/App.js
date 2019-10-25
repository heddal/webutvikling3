import React, { Component } from 'react';
import Main from './pages/Main';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Destination from './pages/Destination'
import SearchPage from './pages/SearchPage'
import WordCloud from './pages/WordCloud'
import { HashRouter as Router, Route } from 'react-router-dom'


const store = createStore(rootReducer, applyMiddleware(thunk)) ;


class App extends Component {

  render() {
    return (
      <div>
        {/* hello world */}
        <Provider store = {store}>
            <Router >
              <div>
                <Route path="/" exact component={Main} />
                <Route path="/wordcloud" component={WordCloud} />
                <Route path="/search" component={SearchPage} />
                <Route path="/destination" component={Destination} />
              </div>
            </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
