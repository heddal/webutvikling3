import React, { Component } from 'react';
import Searchbox from '../components/Searchbox'
import { Grid } from '@material-ui/core';
import Card from '../components/Card';
import InfiniteScroll from 'react-infinite-scroller';





class SearchPage extends Component {
    constructor(props){
        super(props)
        this.state ={
            items: 10,
            hasMoreItems: true
        };
    }

    showItems() {
        var items = [];
        for (var i = 0; i < this.state.items; i++) {
          items.push(<Card/>);
        }
        return items;
      }

      loadMore() {
        if(this.state.items===100){
          
          this.setState({ hasMoreItems: false});
        }else{
            setTimeout(() => {
            this.setState({ items: this.state.items + 10});
        }, 2000);
        }
        
      }
    

    render( ) { 

        var items = [];
        for (var i = 0; i < this.state.items; i++) {
          items.push(<Card/>);
        }

        return ( 
            <Grid 
                container
                spacing={16}
				style={{padding: 20, width: '100%', marginTop:36, marginBottom:36}}
				direction='column'
				justify='center'
				alignItems='center'
            >
                <div style={{width:'100vw', textAlign:'center'}}>
                    <h2 style={{padding:8}}>Resultater fra søk</h2>
                    <Searchbox/>
                </div>
                
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
                            {items}
                        </div>
                            
                        
                    </InfiniteScroll>
                </Grid>
            </Grid>

            
         );
    }
}
 
export default SearchPage;