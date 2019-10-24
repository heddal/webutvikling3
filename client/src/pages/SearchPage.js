import React, { Component } from 'react';
import Searchbox from '../components/Searchbox'
import { Grid } from '@material-ui/core';
import FilterCards from '../components/FilterCards';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import BackButton from '../components/BackButton';
import Sorting from '../components/Sorting';
import Button from '@material-ui/core/Button';
import { continentFilter } from '../actions/ContinentAction';



class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state ={
            items: 10,
            hasMoreItems: true
        };
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

    handleClick(continent){
        console.log(continent)
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
                    <Button onClick = {this.handleClick('africa')}> Africa </Button>
                    <Button onClick = {this.handleClick('america')}> America </Button>
                    <Button onClick = {this.handleClick('asia')}> Asia </Button>
                    <Button onClick = {this.handleClick('europe')}> Europe </Button>
                    <Button onClick = {this.handleClick('oceania')}> Oceania </Button>
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
    return {
      word: state.filter.searchWord
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      continentFilter: (continent) => dispatch(continentFilter(continent))
    }
  };
 
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);