import React, { Component } from 'react';
import './Card.css';
import bilde from './bilde.jpg';
import { Link } from 'react-router-dom'


class Cards extends Component {
    // initialize our state
    state = {
      data: [],
      id: 0,
      name: null,
      description: null,
      continent: null,
      country: null,
      source: null, 
      img: null,
      popularity: 0,
      intervalIsSet: false,
    };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 10000);
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
    fetch('http://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };


  // Retrieve data to one card
  render() {
    const {data}  = this.state;
    return (
      <div className="trio">
      {data.map(dat => (
        <div className = 'card-container'>
            <div className = 'card-item'> <img src = {dat.img} alt="alt" /> </div>
            <div className = 'card-item'> {dat.name} </div>
            <div className = 'card-item' > <Link to="/Destination" className='link'><button> Show More </button> </Link> </div>
        </div> 
      ))}
      </div>
    );
  }

}


export default Cards;
