import React, { Component } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { showDestination } from '../actions/DestinationAction';
import axios from 'axios'
import { changeSearchword } from '../actions/SearchAction'


class Cards extends Component {
    // initialize our state
    constructor(props){
      super(props)
      this.state = {
        data: [],
        popularity: null,
        intervalIsSet: false,
      };

      this.updateDB = this.updateDB.bind(this)

    }

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

  // gets the three most popular cities for quick viewing
  getDataFromDb = () => {
    fetch('/api/threeMostPopular/')
      .then((data) => data.json())
      .then((res) => this.setState({
        data: res.data
      }));
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB(idToUpdate, newPopularity){
    axios.post('/api/updateData', {
      id: idToUpdate,
      update: { popularity: newPopularity },
    });
  }



  // Show right destination and update the popularity of this destination
   handleButtonClick = (denneID, newPopularity) => props =>{ 
    this.props.showDestination(denneID);
    newPopularity++;
    this.updateDB(denneID, newPopularity);
    this.props.changeSearchword("")
  };

  // Retrieve data to one card
  render() {
    const {data}  = this.state;
    return (
      <div className="trio">
      {data.map(dat => (
        <div className = 'card-container' key={dat.name}>
            <div className = 'card-item'>
              <img src = {dat.img} alt="alt" />
            </div>
            <div className = 'card-item'> <p style = {{textTransform: 'capitalize'}}>{dat.name}</p> </div>
            <div className = 'card-item' >
              <Link to="/Destination" className='link'>
                <button onClick={this.handleButtonClick(dat._id, dat.popularity)}>
                  Show More
                </button>
              </Link>
            </div>
        </div>
      ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showDestination: (destinationID) => dispatch(showDestination(destinationID)),
    changeSearchword: (searchWord) => dispatch(changeSearchword(searchWord))
  }
};



export default connect(null, mapDispatchToProps)(Cards);
