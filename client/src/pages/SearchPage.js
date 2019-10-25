import React, { Component } from 'react';
import Searchbox from '../components/Searchbox'
import { Grid } from '@material-ui/core';
import FilterCards from '../components/FilterCards';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import BackButton from '../components/BackButton';
import Sorting from '../components/Sorting';
import { continentFilter } from '../actions/ContinentAction';
import { changeSearchword } from '../actions/SearchAction';
import './Button.css'



class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state ={
            items: 10,
            hasMoreItems: true,
            activeButton: 'all'
        };
        this.getContinent = this.getContinent.bind(this)
    }

    componentDidMount() {
      if (this.props.word.length === 0){
        this.props.changeSearchword("all")
      }
      this.props.continentFilter("all")
    }

    loadMore() {
      if (this.state.items===100){
          this.setState({ hasMoreItems: false});
      } else{
          setTimeout(() => {
          this.setState({ items: this.state.items + 10});
      }, 2000);
      }
        
    }

    getContinent(continent, e){
        this.props.continentFilter(continent);
        const activebutton = this.state.activeButton
        if (activebutton !== e.target.id){
          document.getElementById(activebutton).className = ''
          document.getElementById(e.target.id).className = 'active'
          this.setState({activeButton: e.target.id});
        }
        
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
                <div className = "button-group" style={{textAlign: 'center', fontFamily: 'Arial, Helvetica, sans-serif', borderRadius: '10px'}}>
                  <button className = 'active' id = 'all'  onClick = {(e) => this.getContinent('all', e)}> All </button>
                  <button id = 'africa' onClick = {(e) => this.getContinent('Africa', e)}> Africa </button>
                  <button id = 'america' onClick = {(e) => this.getContinent('America', e)}> America </button>
                  <button id = 'asia' onClick = {(e) => this.getContinent('Asia', e)}> Asia </button>
                  <button id = 'europe' onClick = {(e) => this.getContinent('Europe', e)}> Europe </button>
                  <button id = 'oceania' onClick = {(e) => this.getContinent('Oceania', e)}> Oceania </button>
                </div>
              </div>
              <FilterCards/>
              <Grid 
              container
              direction='row'
              wrap='wrap'
              justify='center'
              style={{width: '100%',  }}>
                  
                  <InfiniteScroll
                      loadMore={this.loadMore.bind(this)}
                      hasMore={this.state.hasMoreItems}
                      loader={<div className="loader" key={0}>Loading ...</div>}
                      useWindow = {false}
                  >
                      {/*items to load*/}
                      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                           
                      </div>
                          
                      
                  </InfiniteScroll>
              </Grid>
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