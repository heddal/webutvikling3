import React, { Component } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';
import { showDestination } from '../actions/DestinationAction';
import { setLength } from '../actions/LengthAction';

class FilterCards extends Component {
  // initialize our state
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      intervalIsSet: false,
      items: 20,
      hasMoreItems: true,
      maxItems: 0,
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
    };
    window.addEventListener('scroll', this.loadMore.bind(this), false);
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
        fetch('/api/getData')
        .then((data) => data.json())  
        .then((res) => this.sortData(res.data));

      } else {
        fetch('/api/search/' + this.props.continent)
        .then((data) => data.json())  
        .then((res) => this.sortData(res.data));
      }
      
    } else if (this.props.continent === 'all') {
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


  // this will update the popularity count of the destination
  updateDB = (idToUpdate, newPopularity) => {

    axios.post('/api/updateData', {
      id: idToUpdate,
      update: { popularity: newPopularity },
    });
  };


  // Show right destination and update the popularity of this destination
  handleButtonClick = (denneID, newPopularity) => props =>{ 
    this.props.showDestination(denneID);
    newPopularity++;
    this.updateDB(denneID, newPopularity);
  };

  // to infinate scroll
  loadMore() {
    if (this.state.items >= this.state.maxItems){
        this.setState({ hasMoreItems: false});
    } else{
        setTimeout(() => {
        this.setState({ items: this.state.items + 20});
    }, 1000);
    }
      
  }


  render() { 
    const {data}  = this.state;
    const dataCards = data.map(dat => {
      return (
        <div className="trio" key={dat._id}>
          <div className = 'card-container' >
              <div className = 'card-item'> <img src = {dat.img} alt="alt" /> </div>
              <div className = 'card-item'> <p> {dat.name} </p> </div>
              <div className = 'card-item' > <Link to="/Destination" className='link'><button onClick={this.handleButtonClick(dat._id, dat.popularity)}> Show More </button> </Link> </div>
          </div> 
        </div>
      ) ;
    });
    return (
      <div >
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore.bind(this)}
          hasMore={this.state.hasMoreItems}
          useWindow = {false}
        >
          <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', height: "100%"}}>
                {dataCards.slice(0, this.state.items)}
          </div>
              
          
        </InfiniteScroll>
      </div>);
    
  }
}

const mapStateToProps = (state) => { //give us accsess to the data in store
  const filter = state.filter
  const sort = state.sort
  return {
    word: filter.searchWord,
    continent: filter.continent,
    sortType: sort.sortType,
    length: state.length.length,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    showDestination: (destinationID) => dispatch(showDestination(destinationID)),
    setLength: (length) => dispatch(setLength(length))
  }
};
 
export default connect(mapStateToProps, mapDispatchToProps)(FilterCards);