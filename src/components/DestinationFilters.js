import React, { Component } from 'react';
//import { connect } from 'react-dom';
import '../actions/destinationActions'




class DestinationFilters extends Component {

    getVisibleDestinations = (destinations, { word, sortBy }) => {
        //check if it matches the search word
        return destinations.filters(destination => {
            const wordMatch = 
                destination.continent.toLowerCase().includes(word.toLowerCase()) ||
                destination.country.toLowerCase().includes(word.toLowerCase()) ||
                destination.city.toLowerCase().includes(word.toLowerCase());
            return wordMatch;
        }).sortBy((destination1, destination2) => {
            if(sortBy === 'country') {
                return destination1.country.localeCompare(destination2.country);
            } else if(sortBy === 'city'){
                return destination1.city.localeCompare(destination2.city);
            }
        })
      }

    render() { 
        return ( 
            <div>

            </div>
         );
    }

    
}

export default DestinationFilters;




 
