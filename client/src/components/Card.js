import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      places: []
    };
  }

// Her fetcher den hardkoda eksempelkode kalt customers.
// Dette bør være steder istedet:)
  componentDidMount() {
    fetch('api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers},
        () => console.log('Customers fetched: ', customers)));
    fetch('/places')
      .then(res => res.json())
      .then(places => this.setState({places},
        () => console.log('Places fetched: ', places)));
  }

// Husk dette er egt ett kort, så ikke vis liste med steder her. Nå er det kun for å teste.
// Match heller id med gitt id og print dét stedet.
  render() {
    return (
      <div>
        <h2>This is a CARD</h2>
        <h3>Customers: </h3>
        <ul>
          {this.state.customers.map( customers =>
            <li key={customers.id}> { customers.firstName } { customers.lastName } </li>
          )}
        </ul>
        <h3>Places stored:</h3>
        <ul>
          {this.state.places.map( places =>
            <li key={places.id}> {places.name} </li>
          )}

        </ul>

      </div>
    );
  }

}

export default Card;
