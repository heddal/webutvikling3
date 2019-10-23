import React, { Component } from 'react';
import Main from './pages/Main';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/RootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import SearchPage from './pages/SearchPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Destination from './pages/Destination'
import axios from 'axios';


const store = createStore(rootReducer, applyMiddleware(thunk)) ;

//litt usikker på om alt dette skal i app eller hvor vi skal putte det, men har det her foreløpig

class App extends Component {

  // initialize our state
  state = {
    data: [],
    id: 0,
    name: null,
    description: null,
    continent: null,
    temperature: null, //skal dette være noe annet enn liste i state?
    mood: null, //eller liste?
    popularity: 0,
    intervalIsSet: false,
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // never let a process live forever
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch('http://it2810-10.idi.ntnu.no/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };


  render() {
    const {data}  = this.state;
    return (
      <div>
        <ul>
          {data.length <= 0 ? "Ingenting i databasen" : data.map((dat) => (
            <li key={data.name}>
              <span>name: </span> {dat.name} <br/>
              <span>description: </span> {dat.description}

            </li>
          ))
        }
        </ul>
      </div>
    );
      {/*}
        <Provider store = {store}>
          <Router>

            <Route path="/" exact component={Main} />
            <Route path="/search" component={SearchPage} />
            <Route path="/destination" component={Destination} />

          </Router>
      </Provider>*/}
  }
}

export default App;
