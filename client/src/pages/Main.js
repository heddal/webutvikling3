// this is the main page
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Main.css';
import Cards from '../components/MainCards';
import Searchbox from '../components/Searchbox';


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
                            <Searchbox/>
                        </div>

                    </Grid>


                    <Grid container justify="center" spacing={2}>
                           <Cards/>

                    </Grid>


                </Grid>
            </div>
        );
    }
}

export default Main;
