import React, { Component } from 'react';
import Searchbox from '../components/Searchbox'
import { Grid, CardActionArea } from '@material-ui/core';
import Card from '../components/Card';




class SearchPage extends Component {
    render( ) { 

        let cards = [];
        for (let i=0; i < 10; i++) {
            cards.push(<Card/>)
        }

        return ( 
            <Grid 
                container
                spacing={16}
				style={{padding: 20, width: '100%'}}
				direction='column'
				justify='center'
				alignItems='center'
            >
                Her var det et søk gitt!
                <Searchbox/>
                <Grid 
                container
                direction='row'
                wrap='wrap'
                justify='center'
                style={{width: '100%' }}>
                    {cards}
                </Grid>
            </Grid>

            
         );
    }
}
 
export default SearchPage;