// this is the main page
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Main.css';
import Card from '../components/Card'
import Searchbox from '../components/Searchbox'


class Main extends Component {
    state = {  }
    render() {
        return (
            <div className="alt">
                <Grid container justify="center" alignItems="center" direction="column"  className="main">
                    <Grid container className="text">

                        <div className="content">
                            <h3>
                                Dream destination
                            </h3>
                            <h4>
                                Where is your ultimate destination?
                            </h4>

                            <Searchbox />
                        </div>

                    </Grid>


                    <Grid container justify="center" direction="row" spacing={2}>
                        {[0, 1, 2].map(value => (
                            <Grid item key={value} >
                                <Card />
                            </Grid>
                        ))}
                    </Grid>
                    

                </Grid>
            </div>
        );
    }
}

export default Main;
