import React, { Component } from 'react';
import Searchbox from '../components/Searchbox'
import { Grid } from '@material-ui/core';
import FilterCards from '../components/FilterCards';
import { connect } from 'react-redux';
import BackButton from '../components/BackButton';
import Sorting from '../components/Sorting';
import Button from '@material-ui/core/Button';
import { continentFilter } from '../actions/ContinentAction';
import { changeSearchword } from '../actions/SearchAction';



class SearchPage extends Component {
  constructor(props){
    super(props)
    this.getContinent = this.getContinent.bind(this)
  }

  componentDidMount() {
    if (this.props.word.length === 0){
      this.props.changeSearchword("all")
    }
    this.props.continentFilter("all")
  }

  handleClick = (continent) => prop =>{
      console.log(continent)
      this.props.continentFilter(continent)
  };

  getContinent(continent){
      this.props.continentFilter(continent)
  }
    

  render( ) { 
    return ( 
        <Grid 
          container
          spacing={8}
          style={{padding: 20, width: '100%', marginTop:36, marginBottom:36}}
          direction='column'
          justify='center'
          alignItems='center'
          >
            <div style={{width:'100vw', textAlign:'center'}}>
              <div style={{justifyContent: "space-between", display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft:'3%', paddingRight: '5%'}}>
                <BackButton/>
                <h2 style={{padding:8}}> Results from "{this.props.word}"</h2>
                <Sorting />
              </div>
                <Searchbox/>
              <div style={{textAlign: 'center'}}>
                <button onClick = {(e) => this.getContinent('all')}> All </button>
                <button onClick = {(e) => this.getContinent('Africa')}> Africa </button>
                <button onClick = {(e) => this.getContinent('America')}> America </button>
                <button onClick = {(e) => this.getContinent('Asia')}> Asia </button>
                <button onClick = {(e) => this.getContinent('Europe')}> Europe </button>
                <button onClick = {(e) => this.getContinent('Oceania')}> Oceania </button>
              </div>
            </div>
          <FilterCards/>
      </Grid>


  )}}

const mapStateToProps = (state) => { //give us accsess to the data in store
    const filter = state.filter
    return {
      word: filter.searchWord
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      continentFilter: (continent) => dispatch(continentFilter(continent)),
      changeSearchword: (word) => dispatch(changeSearchword(word))
    }
  };
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);