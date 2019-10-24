//Page that shows more information about the destination chosen

import React, { Component } from 'react';
import './Destination.css';
import { Grid, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import './Destination.css'
import BackButton from '../components/BackButton';



class Destination extends Component {
    state = {
        data: [],
        id: 0,
        name: null,
        country: null,
        continent: null,
        source: null,
        img: null
    }

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
        fetch('/api/getDataFrom/' + this.props.destinationID)
          .then((data) => data.json())
          .then((res) => this.setState({ 
            data: res.data
          }));
      };

    render() {
        const data = this.state.data;
        return(
            <div className = 'container-destination'>
                <div className = 'back'>
                    <BackButton/>
                </div>
                <Grid
                    container
                    spacing={8}
                    className='papir'

                >
                    <Paper className='paper'>
                        <div >
                            <h2> {data.name} </h2>
                            <h4> {data.country}, {data.continent}</h4>
                            <div className='bilde'> <img src = {data.img} alt="alt" /> </div>
                            <p> {data.description}</p>
                            <p alignItems="flex-end">This info is retrieved from: {data.source}</p>
                        </div>
                    </Paper>
                </Grid>
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => { //give us accsess to the data in store
    return {
      destinationID: state.destination.destinationID
    }
  }

export default connect(mapStateToProps)(Destination);