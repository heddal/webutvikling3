import React, { Component } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { showDestination } from '../actions/DestinationAction';
import { red } from '@material-ui/core/colors';


class Cards extends Component {
    // initialize our state
    state = {
      data: [],
      id: 0,
      name: null,
      img: null,
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
    fetch('/api/threeMostPopular/')
      .then((data) => data.json())
      .then((res) => this.setState({ 
        data: res.data
      }));
  };

  //If the key pressed is the enter-key, the searchword will be updated in store
   handleButtonClick = denneID => props =>{ 
    this.props.showDestination(denneID);


  };


  // Retrieve data to one card
  render() {
    const {data}  = this.state;
    return (
      <div className="trio">
      {data.map(dat => (
        <div className = 'card-container' key={dat.name}>
            <div className = 'card-item'> <img src = {dat.img} alt="alt" /> </div>
            <div className = 'card-item'> {dat.name} </div>
            <div className = 'card-item' > <Link to="/Destination" className='link'><button onClick={this.handleButtonClick(dat._id)}> Show More </button> </Link> </div>
        </div> 
      ))}
      </div>
    );
  }

}


const mapDispatchToProps = (dispatch) => {
  return {
    showDestination: (destinationID) => dispatch(showDestination(destinationID))
  }
};

const mapStateToProps = (state) => { //give us accsess to the data in store
  return {
    destinationID: state.destination.destinationID
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cards);
