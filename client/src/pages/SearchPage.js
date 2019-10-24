import React, { Component } from 'react';
import Searchbox from '../components/Searchbox'
import { Grid } from '@material-ui/core';
import FilterCards from '../components/FilterCards';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import MainCards from '../components/MainCards';
//import DropDown from '../components/DropDown'



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

    
    render( ) {
        return ( 
          <div>
            <div style={{marginLeft:'36', marginTop:'36'}}>
              knapp
            </div>
          
            <Grid 
                container
                spacing={8}
				style={{padding: 20, width: '100%', marginTop:36, marginBottom:36}}
				direction='column'
				justify='center'
				alignItems='center'
            >
                <div style={{width:'100vw', textAlign:'center', display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <h2 style={{padding:8}}>Resultater fra "{this.props.word}"</h2>
                    <Searchbox/>
                   
                </div>
                <FilterCards />
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
                        {/*items to load
                        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                
                        </div>*/}
                            
                        
                    </InfiniteScroll>
                </Grid>
            </Grid>
            </div>
            
         );
    }
}

const mapStateToProps = (state) => { //give us accsess to the data in store
    return {
      word: state.search.searchWord
    }
  }
 
export default connect(mapStateToProps)(SearchPage);