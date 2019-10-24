import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

class FilterCards extends Component {
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

        getDataFromDb = () => {
          fetch('/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ 
              data: res.data
            }));
        };


        render() {
          const {data}  = this.state;
          return (
            <div className="trio">
            {data.map(dat => (
              <div className = 'card-container' key={dat.name}>
                  <div className = 'card-item'> <img src = {dat.img} alt="alt" /> </div>
                  <div className = 'card-item'> {dat.name} </div>
                  <div className = 'card-item' > <Link to="/Destination" className='link'><button > Show More </button> </Link> </div>
              </div> 
            ))}
            </div>
          );
        }
}
 
export default FilterCards;