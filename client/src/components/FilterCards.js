import React, { Component } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class FilterCards extends Component {
        // initialize our state
        constructor(props) {
          super(props)
          this.state = {
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
            }
            this.sortData = this.sortData.bind(this)
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
      
        componentWillUnmount() {
          if (this.state.intervalIsSet) {
            clearInterval(this.state.intervalIsSet);
            this.setState({ intervalIsSet: null });
          }
        }
      
        // our first get method that uses our backend api to
        // fetch data from our data base
        getDataFromDb = () => {
          if (this.props.word === "all"){
            if (this.props.continent === "all"){
              console.log("IKKE HER :(((")
              fetch('/api/getData')
              .then((data) => data.json())  
              .then((res) => this.sortData(res.data));

            } else {
              fetch('/api/search/' + this.props.continent)
              .then((data) => data.json())  
              .then((res) => this.sortData(res.data));
            }
            
          } else if (this.props.continent === 'all') {
            console.log("INN HER?")
            fetch('/api/search/' + this.props.word)
              .then((data) => data.json())  
              .then((res) => this.sortData(res.data));
        
          } else {
            fetch('/api/search/' + this.props.continent + '/' + this.props.word )
            .then((data) => data.json())  
            .then((res) => this.sortData(res.data))
        }}

        sortData(data){
          if(this.props.sortType){
            if(this.props.sortType === 'A-Z'){
              const sorted = data.sort((a,b) => (a.name > b.name) ? 1:-1)
              this.setState({data: sorted});
            }
            if(this.props.sortType === 'Popularity'){
              const sorted = data.sort((a,b) => (a.popularity > b.popularity) ? -1:1)
              this.setState({data: sorted});
            }
          } else{this.setState({data: data})}

        }

    render() { 
      const {data}  = this.state;
      return (
        <div className="trio">
        {data.map(dat => (
          <div className = 'card-container' key={dat.name}>
              <div className = 'card-item'> <img src = {dat.img} alt="alt" /> </div>
              <div className = 'card-item'> <p> {dat.name} </p> </div>
              <div className = 'card-item' > <Link to="/Destination" className='link'><button /*onClick={this.handleButtonClick(dat.id)}*/> Show More </button> </Link> </div>
          </div> 
        ))}
        </div>
      )
    }
}

const mapStateToProps = (state) => { //give us accsess to the data in store
  const filter = state.filter
  const sort = state.sort
  return {
    word: filter.searchWord,
    continent: filter.continent,
    sortType: sort.sortType
  }
}
 
export default connect(mapStateToProps)(FilterCards);